const functions = require("firebase-functions");
const { Storage } = require("@google-cloud/storage");
const admin = require("firebase-admin");
const Excel = require("exceljs");
var path = require("path");
admin.initializeApp(functions.config().firestore);
var db = admin.firestore();

//Inicializa el admin sdk para guardar los registros

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

//crea log en la base de datos con la informacion de la creacion del archivo
exports.CreacionDeLogsDeArchivos = functions.storage
  .object()
  .onFinalize(async object => {
    try {
      var date = new Date(Date.now());
      console.log(date);
      var log = {
        userUid: `${object.metadata.userUid}`,
        bufeteUid: `${object.metadata.bufeteUid}`,
        tipo: `${object.metadata.tipo}`,
        fecha: admin.firestore.Timestamp.fromDate(date),
        uuid: `${object.metadata.uuid}`
      };

      await db
        .collection("logsArchivos")
        .doc(`${object.metadata.uuid}`)
        .set(log);
      console.log(log);
      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  });

//Se encarga de crear los clientes y cuentas al subirse un archivo
exports.CreacionDeClientesYCuentas = functions.storage
  .object()
  .onFinalize(async object => {
    //Descarga el archivo que se acaba de subir\
    var name = object.name.replace(/:/g, "").split("/")[1];
    console.log(name);
    const storage = new Storage();
    const bucket = storage.bucket("gesth-641d7.appspot.com");
    const tempLocalFile = path.join("/tmp", `${name}.xlsx`);
    var data = await bucket
      .file(object.name)
      .download({ destination: tempLocalFile });

    //Abre el archivo EXCEL descargado
    var workbook = new Excel.Workbook();
    var tmp = await workbook.xlsx.readFile(`/tmp/${name}.xlsx`);
    var registros = workbook.getWorksheet().getSheetValues();
    registros = registros.slice(2);

    var response = true;
    console.log(registros);
    registros.forEach(async registro => {
      //Verificar si el cliente existe
      var client = await db
        .collection("clientes")
        .doc(`${registro[3]}`)
        .get();

      //si el cliente existe
      if (client.exists === false) {
        //crear el objeto cliente
        var cliente = {
          nombre: registro[1],
          identidad: registro[2],
          correo: registro[4] ? registro[4] : "",
          patrono: registro[5] ? registro[5] : "",
          "direccion patrono": registro[6] ? registro[6] : "",
          "direccion domicilio": registro[7] ? registro[7] : "",
          cuentas: []
        };

        //guardarlo en la firestore
        await db
          .collection("clientes")
          .doc(`${registro[3]}`)
          .set(cliente);

        client = cliente;
      } else {
        //copia la data del cliente que encontro
        client = client.data();
      }

      //verifica si la cuenta ya existe
      const account = await db
        .collection("cuentas")
        .doc(`${registro[8]}`)
        .get();

      if (account.exists === false) {
        var cuenta = {
          clienteId: registro[3] ? registro[3] : "",
          gestorId: registro[18] ? registro[18] : "",
          Saldo$: registro[9] ? registro[9] : "",
          SaldoL: registro[10] ? registro[10] : "",
          "Fecha Asignacion": admin.firestore.Timestamp.fromDate(
            ExcelDateToJSDate(parseInt(registro[11]))
          )
            ? admin.firestore.Timestamp.fromDate(
                ExcelDateToJSDate(parseInt(registro[11]))
              )
            : "",
          "Fecha Castigo": admin.firestore.Timestamp.fromDate(
            ExcelDateToJSDate(parseInt(registro[19]))
          )
            ? admin.firestore.Timestamp.fromDate(
                ExcelDateToJSDate(parseInt(registro[19]))
              )
            : "",
          ML: registro[21] ? registro[21] : "",
          "Numero Tarjeta": registro[20] ? registro[20] : "",
          Vehiculo: registro[16] ? registro[16] : "",
          "Estado Cartera": registro[17] ? registro[17] : "",
          Historico: registro[22] ? registro[22] : "",
          "Caracterizacion Anterior": registro[12] ? registro[12] : "",
          "Caracterizacion Actual": registro[13] ? registro[13] : "",
          Subcaracterizacion: registro[14] ? registro[14] : "",
          "Caracterizacion Judicial": registro[15] ? registro[15] : "",
          dataCuenta: {},
          bufeteId: registro[23],
          cuentaId: registro[8],
          saldoTotalL: parseFloat(registro[9]) * 25 + parseFloat(registro[10])
        };

        var tmpresponse = await db
          .collection("cuentas")
          .doc(`${registro[8]}`)
          .set(cuenta);
        console.log("cuenta creada");
        response = tmpresponse;

        // await agregarCuentaACliente(`${registro[3]}`, `${registro[8]}`);
      }
    });
    return response;
  });

//Actualiza la lista de los numeros de vase de las cuentas de un cliente en especifico
exports.ActualizarListaDeCuentasDeCliente = functions.firestore
  .document("cuentas/{cuentaId}")
  .onCreate(async (change, context) => {
    var cuenta = change.data();
    var cuentaId = context.params.cuentaId;

    //inserta la nueva cuenta en la lista de cuentas del cliente
    console.log(cuenta.clienteId);
    await db
      .collection("clientes")
      .doc(`${cuenta.clienteId}`)
      .update({
        cuentas: admin.firestore.FieldValue.arrayUnion(parseInt(cuentaId))
      });

    //obtiene la informacion del cliente al que pertenece la cuenta

    var cliente = await db
      .collection("clientes")
      .doc(`${cuenta.clienteId}`)
      .get();

    //valida si el cliente existe
    if (cliente.exists) {
      let batch = db.batch();
      var cuentas = cliente.data().cuentas;
      if (cuentas.length > 10) {
        console.log("limite de cuentas exceed");
      }
      //itera por las cuentas existentes del cliente
      cuentas.forEach(cuenta => {
        var ref = db.collection("cuentas").doc(`${cuenta}`);
        batch.update(ref, { dataCuenta: cliente.data() });
      });
      console.log("se hicieron los cambios a todas las cuentas");
      return await batch.commit();

      //hace commit a los updates de las cuentas
    }

    return false;
  });

function ExcelDateToJSDate(serial) {
  var utc_days = Math.floor(serial - 25568);
  var utc_value = utc_days * 86400;
  var date_info = new Date(utc_value * 1000);

  var fractional_day = serial - Math.floor(serial) + 0.0000001;

  var total_seconds = Math.floor(86400 * fractional_day);

  var seconds = total_seconds % 60;

  total_seconds -= seconds;

  var hours = Math.floor(total_seconds / (60 * 60));
  var minutes = Math.floor(total_seconds / 60) % 60;

  return new Date(
    date_info.getFullYear(),
    date_info.getMonth(),
    date_info.getDate(),
    hours,
    minutes,
    seconds
  );
}
// const Excel = require("exceljs");

// var workbook = new Excel.Workbook();
// workbook.xlsx.readFile("test.xlsx").then(function() {
//   // use workbook
//   workbook
//     .getWorksheet()
//     .getSheetValues()[2]
//     .forEach(element => {
//       console.log(element);
//     });
// });
