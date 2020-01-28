import React, { createRef } from "react";
import "./MainTable.css";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
const MainTable = () => {
  var menu = createRef();
  let items = [
    {
      label: "Options",
      items: [
        {
          label: "Agregar Gestion",
          icon: "pi pi-fw pi-plus",
          command: () => {
            window.location.hash = "/fileupload";
          }
        },
        {
          label: "Borrar cuenta",
          icon: "pi pi-fw pi-trash",
          url: "http://primetek.com.tr"
        }
      ]
    },
    {
      label: "Account",
      items: [
        {
          label: "Ver data",
          icon: "pi pi-fw pi-cog",
          command: () => {
            window.location.hash = "/";
          }
        },
        { label: "Configuracion", icon: "pi pi-fw pi-power-off" }
      ]
    }
  ];
  var cuentas = [
    {
      nombre: "5e308f8cd66459e83e05e116",
      id: 0,
      caracterizacion: "9ce0fe40-91f7-40f4-953b-956dc0578f59",
      accion: "787768d9-898c-4a12-830e-70830d4c54c7"
    },
    {
      nombre: "5e308f8cc6653337162e63b0",
      id: 1,
      caracterizacion: "1cb79026-6b9c-4824-949b-00d31c029a7f",
      accion: "a70309f8-71d4-436e-8788-301ed1d64787"
    },
    {
      nombre: "5e308f8cbcdf8f53e8bcba89",
      id: 2,
      caracterizacion: "5eb03119-1c21-40cd-bcce-9e44621be780",
      accion: "9308e9de-4ccc-4e6d-9b47-a7841286ba98"
    },
    {
      nombre: "5e308f8ce9e87eb12cbd01bc",
      id: 3,
      caracterizacion: "512218ee-36ed-471a-bacc-e8baf0855358",
      accion: "78354d1e-c090-4cd4-8535-a4d11142920c"
    },
    {
      nombre: "5e308f8c75f61b50d0174c77",
      id: 4,
      caracterizacion: "759744a3-3ca4-43c6-8fa7-e99502f14d63",
      accion: "8bc0a7a0-9e97-4dcd-91fb-5721bb87e348"
    },
    {
      nombre: "5e308f8c1b458ed0d47ef660",
      id: 5,
      caracterizacion: "57b8d6e7-ad00-4916-a6fd-da9f2d52a3e8",
      accion: "f3023855-3c12-484c-bf5a-0f923f975bc9"
    },
    {
      nombre: "5e308f8ca43446915557fa21",
      id: 6,
      caracterizacion: "e160eaeb-0ff0-4485-a138-e7cbab44e84e",
      accion: "29dcffb5-8246-443e-a7be-aefedad6ff39"
    },
    {
      nombre: "5e308f8ccf2d8042c4df7789",
      id: 7,
      caracterizacion: "05edf964-ca86-4fd8-b85e-6352530f4ec1",
      accion: "2c77b9ea-118f-42e2-8d20-1001b57de63f"
    },
    {
      nombre: "5e308f8ce5ec771b69dc0c3a",
      id: 8,
      caracterizacion: "ad3a16fa-f2b6-4045-a093-459121ce2b0c",
      accion: "6e85579f-0c40-43b0-9e15-f49c6c9ee8eb"
    },
    {
      nombre: "5e308f8cf7faac464ebfff41",
      id: 9,
      caracterizacion: "c5793c66-5077-4fe0-bd11-928d5917a60f",
      accion: "340d19e0-460c-4950-820b-a1fe06f12cb7"
    },
    {
      nombre: "5e308f8ca910df23597f9531",
      id: 10,
      caracterizacion: "ea684131-3a41-49de-86fc-4c1d0cffa0db",
      accion: "5189d2b1-7f15-4ffc-8c15-60730c2bd4ba"
    },
    {
      nombre: "5e308f8cfe6f2443fff0c6d5",
      id: 11,
      caracterizacion: "aa06359f-c540-49b3-b84f-dbd854b6baed",
      accion: "5bf0b40f-1fe2-4d43-895a-ba6618a1ed03"
    },
    {
      nombre: "5e308f8c59a234c20b572d6d",
      id: 12,
      caracterizacion: "224e4c4f-49f2-4fe0-b952-217b10d0eb0e",
      accion: "41e45fa2-4c41-4380-a9b3-2bbe7d6a9e76"
    },
    {
      nombre: "5e308f8c4a24e30996c29269",
      id: 13,
      caracterizacion: "038dea23-e71a-4248-8627-993233e3adb0",
      accion: "ffb894f8-a653-4f16-8887-9bfe5e986cc2"
    },
    {
      nombre: "5e308f8c3c13a65ee980fbe7",
      id: 14,
      caracterizacion: "6bdf18e2-a066-4bac-8e87-4675507fe3c5",
      accion: "a98e0b7c-ded3-45a9-8277-947497dbc72f"
    },
    {
      nombre: "5e308f8cf5baa5a96e1f7284",
      id: 15,
      caracterizacion: "85e0ebe2-44ed-4c97-a2da-119988be04d8",
      accion: "595e0b6f-209c-4155-b24f-4dda52ad2da5"
    },
    {
      nombre: "5e308f8c0bc17accb541083f",
      id: 16,
      caracterizacion: "118c7f1a-188f-44cc-94c9-be1143d466c2",
      accion: "aa5dad64-c971-4ed2-94fe-4287bdc69b60"
    },
    {
      nombre: "5e308f8ca1fe0bdb3b1b3c42",
      id: 17,
      caracterizacion: "2de344fb-9d09-49fa-9a3c-5dd468b578d9",
      accion: "541a53c9-3534-4ce7-b5f5-9e39b5cfd07e"
    },
    {
      nombre: "5e308f8c5ad95130a7548caa",
      id: 18,
      caracterizacion: "026e7bbc-2c64-41ed-8062-c76a7bbd2ea9",
      accion: "e078baa1-99cb-4867-a8d4-e662b4f4ebc3"
    },
    {
      nombre: "5e308f8cada0cb5fbe765205",
      id: 19,
      caracterizacion: "07f3f3d5-d7ce-489d-8e60-d5192f745f29",
      accion: "5be44166-8152-40e3-99ce-85e4c6eeb658"
    },
    {
      nombre: "5e308f8ce9db2b1ef923f553",
      id: 20,
      caracterizacion: "b66612bf-e6a0-404f-81ac-ac9e903d8a83",
      accion: "897a0559-2a42-434d-97ce-3ea638aa12b8"
    },
    {
      nombre: "5e308f8cf0d8a5ea7ff1326c",
      id: 21,
      caracterizacion: "94cf1c1f-6b12-4c31-8743-9884dd224968",
      accion: "e4015b6c-3d5c-4b2a-a6cf-3046a27d7adb"
    },
    {
      nombre: "5e308f8c52bbd1337aaf3f2a",
      id: 22,
      caracterizacion: "2d1f313b-0ec5-49a2-9525-3e420d14bc37",
      accion: "c0e40437-9c02-4e5f-b212-03e2a7daaa90"
    },
    {
      nombre: "5e308f8caaf02cf63718ce29",
      id: 23,
      caracterizacion: "2eb22db4-1df2-475c-8f71-6f07055db11b",
      accion: "0567bcee-3531-46fb-96c6-bbb4f3262775"
    },
    {
      nombre: "5e308f8c35bf783dfc8464ae",
      id: 24,
      caracterizacion: "cb33763a-010e-43d1-802d-077952795eb3",
      accion: "74c09ac5-0dcc-42b3-b721-95437a211ea2"
    },
    {
      nombre: "5e308f8cce41dee95935a0a3",
      id: 25,
      caracterizacion: "eef83b22-1a7a-406c-b6c5-e317d6c417df",
      accion: "32682459-1cd1-4c25-8387-ebdec86f8532"
    },
    {
      nombre: "5e308f8c8d0447ad43f0f892",
      id: 26,
      caracterizacion: "775b3421-23dc-4e90-a9da-a104b3f6f1e2",
      accion: "03f95155-3766-4e40-9513-87ba8a192c81"
    },
    {
      nombre: "5e308f8ce33a3f4f976b627c",
      id: 27,
      caracterizacion: "e3b01ea1-30b0-43b5-8dc3-e0ca5d74e6e8",
      accion: "6c6c57d7-05e8-4383-9db4-7f3db3fa269f"
    },
    {
      nombre: "5e308f8cae8ca0635596aa66",
      id: 28,
      caracterizacion: "0e318098-9e49-4b67-b2fd-0b486e106857",
      accion: "eec97149-78cc-4714-b697-57bd5821a6cb"
    },
    {
      nombre: "5e308f8cc8e8b36ddfbb5520",
      id: 29,
      caracterizacion: "ab944a69-c7e6-400d-8b29-3b2f4815d3a5",
      accion: "a616e20d-0714-4e45-8a23-5595679d1f5b"
    },
    {
      nombre: "5e308f8c0c7b44ce1e2b0fa8",
      id: 30,
      caracterizacion: "68a272fb-16d0-49a7-bace-d1e264f8ed4a",
      accion: "6a8b56af-96f5-483b-ba66-9667e868d36b"
    },
    {
      nombre: "5e308f8c4705e172be809a6c",
      id: 31,
      caracterizacion: "a8b79fa8-2b52-40e5-a1ae-2e1ce2d5ed13",
      accion: "97ba10e9-c221-4f97-abdb-2fa26274a53c"
    },
    {
      nombre: "5e308f8ce5c3e3db8b981535",
      id: 32,
      caracterizacion: "c8c4b0e1-a6cc-409f-9e9e-3bfd7793be60",
      accion: "63b7348d-21d3-4472-ae75-a5f324640087"
    },
    {
      nombre: "5e308f8c4ec4bff7629e125b",
      id: 33,
      caracterizacion: "b4c91704-12dc-49b7-a87a-16602c64ddb2",
      accion: "e3e3192b-4906-416c-be14-e2dbc5784fb4"
    },
    {
      nombre: "5e308f8c5d2d501ed8e1e413",
      id: 34,
      caracterizacion: "6ed03824-e64e-4eed-b469-320710f459d5",
      accion: "d9af926a-4270-4e29-8ca6-15f8a006903c"
    },
    {
      nombre: "5e308f8c6815add9c92572c1",
      id: 35,
      caracterizacion: "5f4e81d0-222d-4910-b26c-9b220f2a6c3a",
      accion: "c9148329-c163-4bcf-b57e-c6738d6fde30"
    },
    {
      nombre: "5e308f8c47ee2d2e974b0ebe",
      id: 36,
      caracterizacion: "5370df5f-2275-4e72-b328-cd87e70d7958",
      accion: "6dd2c552-2376-4047-bf1f-48aef5db2748"
    },
    {
      nombre: "5e308f8c9acb197e38aa858d",
      id: 37,
      caracterizacion: "0a4b8966-97f8-4fe1-afd8-c3de4a56c692",
      accion: "24c3ea7e-68ec-4f80-89f7-cbb401ac503a"
    },
    {
      nombre: "5e308f8c0391744bb8d2fea5",
      id: 38,
      caracterizacion: "10f9f0d6-510a-44dc-8cc1-6339048dda13",
      accion: "0f549e21-52e6-481a-acdb-960148f819b8"
    },
    {
      nombre: "5e308f8caf0ed66f9daa6493",
      id: 39,
      caracterizacion: "f457374b-564a-4a97-9cb2-3ecefdc5618c",
      accion: "24f2188f-d038-4854-8cae-e3a3520cbbff"
    },
    {
      nombre: "5e308f8c428ee3409e9f568a",
      id: 40,
      caracterizacion: "b9852d0c-bbfb-4bea-99ab-6835769458f5",
      accion: "4ecf8e31-b67b-4daa-80a2-8a95d00f3b65"
    },
    {
      nombre: "5e308f8c31bbd8802dcc0481",
      id: 41,
      caracterizacion: "29dadca7-68b8-445e-87fc-8896f9791f1b",
      accion: "4b0c46b6-a72c-41ba-83bd-a716cf0daa13"
    },
    {
      nombre: "5e308f8cb2374be495c60a64",
      id: 42,
      caracterizacion: "e91eef5c-42b7-449a-9287-e8d5e71c58ac",
      accion: "9e6bbbe1-8fe8-45d3-a427-dd4e749d3876"
    },
    {
      nombre: "5e308f8c7de4e36c35c6af94",
      id: 43,
      caracterizacion: "79e4cc05-c87d-4c60-b219-7b6f0ccdb05c",
      accion: "219a0d83-4c2c-484d-9683-95eff1489f68"
    },
    {
      nombre: "5e308f8c1ab5124d386dadd8",
      id: 44,
      caracterizacion: "23be4fa0-25da-46f8-9df6-449452eb372e",
      accion: "31656249-d267-46b8-a762-072093967995"
    },
    {
      nombre: "5e308f8c1ab3eaec3fcadbdb",
      id: 45,
      caracterizacion: "dc5e4e26-29e6-45fd-b3bf-81790ced7aea",
      accion: "e4f07d7e-a893-4817-abb1-8808eab2f52c"
    },
    {
      nombre: "5e308f8cb6932b6a1f296be3",
      id: 46,
      caracterizacion: "3e5a1a10-4480-40eb-9111-a0413faf61ea",
      accion: "7c8737e1-f15b-40f5-aee1-8f3697f39b8f"
    },
    {
      nombre: "5e308f8c696792d688ac3ae2",
      id: 47,
      caracterizacion: "19f36c79-7a26-4232-8deb-ce11dfb499fb",
      accion: "f9dd6b51-bfeb-4322-a57e-96ee7a0f98e2"
    },
    {
      nombre: "5e308f8ca02241cd8bbacf99",
      id: 48,
      caracterizacion: "9acc0599-9227-4976-bf80-504141b41956",
      accion: "3b667508-72cc-4f7f-990d-87a4b12bc223"
    },
    {
      nombre: "5e308f8cdec4a432863cdcfd",
      id: 49,
      caracterizacion: "59385bdc-6085-4b72-916a-ffb6e4b3e70d",
      accion: "c7133808-6c1f-4f3d-bb82-4557872317e3"
    },
    {
      nombre: "5e308f8c649eceadc236349e",
      id: 50,
      caracterizacion: "4d103a42-94d5-4fab-9ac2-380987faba77",
      accion: "0d7bd965-70d8-4fec-8d5b-178a8a63c27f"
    },
    {
      nombre: "5e308f8c61184ac93efc3faf",
      id: 51,
      caracterizacion: "6b33e90f-3862-4284-8a60-a49f78d59781",
      accion: "1f5e0c67-29c8-4bab-94a6-4ada5ccdaccc"
    },
    {
      nombre: "5e308f8c26bd937944752e5d",
      id: 52,
      caracterizacion: "0e77d38c-95ba-4e45-9aa5-af8578ad29ef",
      accion: "a7728581-34f6-4876-85ed-a267a0c934f5"
    },
    {
      nombre: "5e308f8c2221c7b4f8f96e11",
      id: 53,
      caracterizacion: "04ab0ac1-42f6-4b97-b2af-c87e56e173b2",
      accion: "d05e2765-491c-4c8b-bcaa-2f0049c19b5a"
    },
    {
      nombre: "5e308f8c342514b127d59c03",
      id: 54,
      caracterizacion: "0594e96d-4d55-454f-bada-08b0916757af",
      accion: "b40c0459-e207-4918-b055-2b3791b61aa6"
    },
    {
      nombre: "5e308f8c50cd7c9d4a4a8479",
      id: 55,
      caracterizacion: "f44fe5a1-8ea2-4835-a150-6a1064069c24",
      accion: "0b73b61b-428b-4f58-9bc0-052635197e0e"
    },
    {
      nombre: "5e308f8cfec63783f7c41a0a",
      id: 56,
      caracterizacion: "ef67131e-2818-4c5b-8027-6a740c4c9ff6",
      accion: "b4c05a63-29b8-49fc-9a03-b2bb8503bd3f"
    },
    {
      nombre: "5e308f8c1cb463b2bd8ef22d",
      id: 57,
      caracterizacion: "a9f985cf-a509-4dc2-ae68-daca35678f5b",
      accion: "964d8d5f-55b3-4083-acea-009558d7d556"
    },
    {
      nombre: "5e308f8c16745c9823a1c76e",
      id: 58,
      caracterizacion: "1327affc-6ff8-4322-bb3f-2c1c7c1d229b",
      accion: "fe651425-e2fc-4084-8ff1-f98712ca1979"
    },
    {
      nombre: "5e308f8c45d4be2246d4a914",
      id: 59,
      caracterizacion: "38bc0c84-b170-46f3-a048-77fa67b1c458",
      accion: "d24af42a-26f1-440d-9d60-b7c0319ede2a"
    },
    {
      nombre: "5e308f8c3fe41feb88c23093",
      id: 60,
      caracterizacion: "b70dc340-3892-4698-bf00-aa873dd8dea2",
      accion: "35fb85f6-e0ca-4e73-8fd1-90dbf4c030b5"
    },
    {
      nombre: "5e308f8c553bd437b893fdb3",
      id: 61,
      caracterizacion: "cbfe98d1-5b40-4031-8bfa-27a912ddbfe8",
      accion: "66b709c9-5a3b-4c19-9c3a-ac1e72429686"
    },
    {
      nombre: "5e308f8cd59fed3908b282c1",
      id: 62,
      caracterizacion: "18872b13-92e8-4971-8811-ed1bc6048065",
      accion: "aaaca1b0-29c4-417a-9489-30e13e7603b5"
    },
    {
      nombre: "5e308f8c6b5fecaea461034a",
      id: 63,
      caracterizacion: "f0d30640-a46a-4eac-b6fc-d14f95e2742e",
      accion: "253e0658-bde2-4053-b186-67081a0df032"
    },
    {
      nombre: "5e308f8c7d8cdd91300af13a",
      id: 64,
      caracterizacion: "4e2a4833-e41b-4214-811c-acd88e1f6ba2",
      accion: "01f1d9f0-9d26-47af-9a87-e1a7efc458ac"
    },
    {
      nombre: "5e308f8c7eb6a83473e408db",
      id: 65,
      caracterizacion: "d4cdcce7-6676-4d23-aeb0-25d383853c39",
      accion: "cec764dc-1644-4b46-b26d-8080c18d567f"
    },
    {
      nombre: "5e308f8cbfb715542f186157",
      id: 66,
      caracterizacion: "c281ef22-bfc7-410c-a469-442817336925",
      accion: "d7927dab-4bce-46a4-acb6-ad839bcdef63"
    },
    {
      nombre: "5e308f8c11fba303841f7730",
      id: 67,
      caracterizacion: "134114a2-038a-4a98-b44f-06703f6696b7",
      accion: "fab20ad3-3851-406d-8073-f9a07346b3fd"
    },
    {
      nombre: "5e308f8c18559afa022d7231",
      id: 68,
      caracterizacion: "75c27002-cdd6-4f2a-b244-1999b59f362b",
      accion: "a3421281-8d68-46a4-a87d-faf4d38506c8"
    },
    {
      nombre: "5e308f8c670f8a921b2f00ae",
      id: 69,
      caracterizacion: "0b57a8be-1061-453c-91f8-734ea110079b",
      accion: "7a5a16be-9f2f-40d5-9e0e-eb76685236c1"
    },
    {
      nombre: "5e308f8cd4a51833831d64a7",
      id: 70,
      caracterizacion: "f73a015b-2dd0-4212-a3a6-f4b4a29a8d26",
      accion: "8cf0a27b-08d0-45e4-9798-c37fb0be1561"
    },
    {
      nombre: "5e308f8c442d75c4385b874a",
      id: 71,
      caracterizacion: "412e2ff4-f41d-4e87-8ae7-85e2237041cf",
      accion: "c6e43d3b-42ad-4804-a412-bf0481fb4355"
    },
    {
      nombre: "5e308f8ca34abb891f5cf102",
      id: 72,
      caracterizacion: "7872d6a0-ac50-4398-a499-2fc276496442",
      accion: "9443a63a-468d-46d5-ab50-4a4c534fcd40"
    },
    {
      nombre: "5e308f8cd4b02b1da1669b38",
      id: 73,
      caracterizacion: "ff76fb2b-16ad-47d2-a0fa-88f450fa9d4c",
      accion: "83757d25-9df8-495f-b893-de67da529a9c"
    },
    {
      nombre: "5e308f8cd32080b686fd5f51",
      id: 74,
      caracterizacion: "f37e53b6-64bc-4504-8e39-a804b23ec4e3",
      accion: "ec3e2f2d-6848-4d15-89e5-372910f0d964"
    },
    {
      nombre: "5e308f8ccfabe055c0b73830",
      id: 75,
      caracterizacion: "925392b9-f6c0-45e8-a30d-0f8742d9fbaf",
      accion: "1aca2c01-3f8a-43b7-b8d5-3008f30a6525"
    },
    {
      nombre: "5e308f8c84a644ba5b55fda5",
      id: 76,
      caracterizacion: "2b1ab2c4-e1cb-4c28-930a-ffeab95b10e5",
      accion: "c0e0b4d3-5013-4d1f-9164-9964aeae9331"
    },
    {
      nombre: "5e308f8c5b259a472c2262d7",
      id: 77,
      caracterizacion: "100b5039-6e8a-4568-a759-c54f4aa5f113",
      accion: "13d05a72-c66d-4b0e-b9bb-5270b027b86c"
    },
    {
      nombre: "5e308f8c00094719f592ea9f",
      id: 78,
      caracterizacion: "c9141eee-6b9e-4da3-b69b-2640b381fa87",
      accion: "b138a31e-d6ec-4ebb-9402-e8f9240eb454"
    },
    {
      nombre: "5e308f8ce000db46aefa96a7",
      id: 79,
      caracterizacion: "08203a26-4692-4d6e-9d7b-5ef8a184603b",
      accion: "748d544d-352e-4def-8206-a7fd1c39648b"
    },
    {
      nombre: "5e308f8c780a6b1635ffe9d8",
      id: 80,
      caracterizacion: "8f87188f-2197-48a7-a1e3-e9e4d1e0d081",
      accion: "0d675638-38cf-4f5b-a7f4-19156bd8962f"
    },
    {
      nombre: "5e308f8c737ded9299258117",
      id: 81,
      caracterizacion: "a47f9ba9-033f-40a4-8b9b-b64fb8d8ec43",
      accion: "37fe17e6-b0cf-4a23-8393-f6433ecc9492"
    },
    {
      nombre: "5e308f8c38c4e862c57364c9",
      id: 82,
      caracterizacion: "1dbe8b24-dbf1-4d3c-8815-6b207e88920f",
      accion: "5d899dbd-ebb2-405e-8493-a4a3a20b6d8d"
    },
    {
      nombre: "5e308f8c9780be14bcb9dfc2",
      id: 83,
      caracterizacion: "2c877ac0-e60f-47f4-bf6e-6513646592bc",
      accion: "923b7b37-c7ff-43fd-bf01-6f34b5da5c5d"
    },
    {
      nombre: "5e308f8c54a4ffe75609d82b",
      id: 84,
      caracterizacion: "1d52cd99-f1c1-43e2-9bb3-f1510e4f611f",
      accion: "7d1b4efe-b78d-4055-9d1c-065a3e94605f"
    },
    {
      nombre: "5e308f8cc89299fc2b321f3e",
      id: 85,
      caracterizacion: "42253ef2-d6fa-442d-98f7-157fb0c6a414",
      accion: "4e6833ae-5642-4b33-8b19-cf7c034b47f2"
    },
    {
      nombre: "5e308f8c16645242265fe730",
      id: 86,
      caracterizacion: "20899b34-f49d-4dca-aaab-0ca56885b966",
      accion: "3c387638-4247-4602-9308-298b50ac7785"
    },
    {
      nombre: "5e308f8cfd26cd522321066d",
      id: 87,
      caracterizacion: "19ed5a03-9861-490f-a908-43a3b1ba6240",
      accion: "acf80ca2-d1ce-497e-85d5-f8f6355a49f5"
    },
    {
      nombre: "5e308f8c8fb30fc58f3608dd",
      id: 88,
      caracterizacion: "634f813d-55e2-4bfa-9958-41c68d59548d",
      accion: "e1a9cc28-284f-40c6-9613-1c21dadf33cb"
    },
    {
      nombre: "5e308f8c26ad993e676f3f92",
      id: 89,
      caracterizacion: "8fb13f81-141e-4299-af6e-649609e28555",
      accion: "6d8561cf-ad1a-4a6c-8869-0e4350310074"
    },
    {
      nombre: "5e308f8cee7905945d010068",
      id: 90,
      caracterizacion: "388e7f39-99fa-413e-ab48-6e77d5494089",
      accion: "e38315ef-adac-4b15-9f7a-32969165f909"
    },
    {
      nombre: "5e308f8ceec2a3d1f15064e2",
      id: 91,
      caracterizacion: "cfebb4b3-cdb2-4752-941b-18b4ef4f19a8",
      accion: "8b4f8016-1488-4aae-b98c-76761e32225d"
    },
    {
      nombre: "5e308f8c73963032e28259a9",
      id: 92,
      caracterizacion: "407b8c0e-6495-4256-8b59-e220d0d64bb4",
      accion: "3dae7260-9157-4438-9cb6-6da03a9a73e6"
    },
    {
      nombre: "5e308f8cd0df0f2401e2139e",
      id: 93,
      caracterizacion: "4c59ce16-c35e-4554-85ba-e4230b2754df",
      accion: "1ce9daef-aa55-4edc-9d87-d5b41033979f"
    },
    {
      nombre: "5e308f8cd64478644f37efbc",
      id: 94,
      caracterizacion: "28a9763a-4a71-453c-a384-93c3c3065e1f",
      accion: "8dbb8383-73f1-4f88-9155-ecd9c4eeceee"
    },
    {
      nombre: "5e308f8ce9a645ad6bb022e0",
      id: 95,
      caracterizacion: "61a40072-22da-41b2-94ef-f4a0da11c285",
      accion: "e44bf7a3-629e-491a-a501-ca9add88a120"
    },
    {
      nombre: "5e308f8cc94184049e501119",
      id: 96,
      caracterizacion: "dbce14ef-c5bb-4620-8685-2bd6f5abbfdd",
      accion: "a4055889-74ff-4d3b-80ee-bd8785fb57da"
    },
    {
      nombre: "5e308f8cd054ebf0b1344bf1",
      id: 97,
      caracterizacion: "aa3566c7-5856-44ba-9f00-a0c68c02887e",
      accion: "a60a4ea6-f128-4b06-8b44-fb45f21fb69e"
    },
    {
      nombre: "5e308f8cf6b48778c8103c1e",
      id: 98,
      caracterizacion: "5eb68bc1-446c-4682-8f5b-8fd35f365ced",
      accion: "e87e2430-e8da-4385-845d-513beaec4773"
    },
    {
      nombre: "5e308f8cd2add09ee6fc6fa0",
      id: 99,
      caracterizacion: "b1854c0e-d170-4343-8f64-180a828ed1be",
      accion: "a2d187f6-a33d-4e5d-8154-2ef53992d61f"
    },
    {
      nombre: "5e308f8cccaf32f01fd04cd5",
      id: 100,
      caracterizacion: "4bb94b91-b89f-41dd-a098-48fda2d4ae71",
      accion: "a4d9ff7f-5033-4261-8c53-f71cd2be7294"
    },
    {
      nombre: "5e308f8cd89712d3ab653d83",
      id: 101,
      caracterizacion: "dd643266-0bfd-412a-9399-7cc0d40926b6",
      accion: "1e7c60f0-2b07-4ed2-8055-80a74093fa78"
    },
    {
      nombre: "5e308f8c9d3ed4a955ba8d6f",
      id: 102,
      caracterizacion: "fbedc18c-8903-4f7b-8aa4-f1b9d1e13beb",
      accion: "9e2dcd29-6bdc-482b-94f4-232e72562bd2"
    },
    {
      nombre: "5e308f8c6f686e648b4f1940",
      id: 103,
      caracterizacion: "7b3c4dfd-5ec2-4552-bceb-28859a91b94f",
      accion: "defdcd2a-c5dd-4603-964d-3a74b7acbbf5"
    },
    {
      nombre: "5e308f8c49af7fd0ba5ae28a",
      id: 104,
      caracterizacion: "61863059-e7d0-418a-9f06-5017fc7bcc1d",
      accion: "a9641f0e-037c-4406-8d9e-667f48249752"
    },
    {
      nombre: "5e308f8ca76564e9853174f5",
      id: 105,
      caracterizacion: "c33750c9-c7be-403a-89f6-68842f72943c",
      accion: "6023f6aa-8161-449c-9d74-1af58416a40d"
    },
    {
      nombre: "5e308f8ce4589108f73b7c43",
      id: 106,
      caracterizacion: "f86326f8-5ffa-4551-a808-b1ce4387593c",
      accion: "5f73920b-fdc7-4506-918e-243099e5299b"
    },
    {
      nombre: "5e308f8ce510471aa4218bf8",
      id: 107,
      caracterizacion: "65645868-32be-4922-a2e3-81da7245325a",
      accion: "816c0567-21f8-44c0-8c0f-570e9a130e29"
    },
    {
      nombre: "5e308f8cda5215fbfe0e3b47",
      id: 108,
      caracterizacion: "6658ce84-86c3-4eb5-b1c2-ef01b8eb1b5f",
      accion: "a48cd8d3-489c-4fcd-ba2d-2051e722adcd"
    },
    {
      nombre: "5e308f8cc8526fe7760aa7ec",
      id: 109,
      caracterizacion: "b3d0fda9-265d-4354-823d-5dc95ada31e1",
      accion: "76900ee9-22c6-4a67-8fff-3582240a80bc"
    },
    {
      nombre: "5e308f8cd6891e7c71f66ebf",
      id: 110,
      caracterizacion: "30f513ad-47b9-417c-8e08-f3ad0fafb31f",
      accion: "b8e58688-425b-4838-b586-c21c3474aac2"
    },
    {
      nombre: "5e308f8c060d52af1a424827",
      id: 111,
      caracterizacion: "f65a4e1d-0597-4d5e-9bf8-5b3841a9f2fe",
      accion: "d0fb1fea-7866-4a7c-bd09-e8f4e48c7fd1"
    },
    {
      nombre: "5e308f8c8df601891c3b12d1",
      id: 112,
      caracterizacion: "8ce54c76-7c46-4e4b-9782-88d3ffbd77ca",
      accion: "b4a9decb-8782-460d-9055-4dc541ae9a4f"
    },
    {
      nombre: "5e308f8c432f75492c4b7a7b",
      id: 113,
      caracterizacion: "c001e2ca-d90f-4eb8-9f35-676c372aa237",
      accion: "24d8c711-8b3a-4517-91d4-9748f9b65bc0"
    },
    {
      nombre: "5e308f8c93fc1f83a8156658",
      id: 114,
      caracterizacion: "f4dcc236-2d18-459c-9acc-91cd0f75f7c9",
      accion: "31df35ef-f07b-44d8-a250-2b75e2012fc5"
    },
    {
      nombre: "5e308f8c5207454234d2cfa7",
      id: 115,
      caracterizacion: "2b8cefa7-8617-416b-8e20-d06ac3f737da",
      accion: "e5ae25d8-8c5b-4572-8c73-0d091b1294b3"
    },
    {
      nombre: "5e308f8c240a8177dbee9448",
      id: 116,
      caracterizacion: "94d785c7-c77c-413e-976a-7d13d457a25b",
      accion: "5cd8b28d-499a-4ecd-97a7-9fb4e776c012"
    },
    {
      nombre: "5e308f8c30312f3afb183470",
      id: 117,
      caracterizacion: "2a661783-bc77-41e6-a24b-6e5f0bd9bf37",
      accion: "6c0c30a8-93f1-4bf7-93bf-e7ea86c0a7ac"
    },
    {
      nombre: "5e308f8cb2deb9120a882de1",
      id: 118,
      caracterizacion: "82435dc1-4b00-4f48-8244-f29f4a7d3682",
      accion: "0fc94288-44e5-44df-91cb-b65ff96d758d"
    },
    {
      nombre: "5e308f8c097303b2ab04116c",
      id: 119,
      caracterizacion: "eab947e6-1c7d-4e03-8782-db263fd30b39",
      accion: "e1971582-1370-4b47-a1dd-6e7bb20efdd3"
    },
    {
      nombre: "5e308f8c7d2ea4ad7cdfcb8f",
      id: 120,
      caracterizacion: "15559524-e564-42d1-86ba-64501cadee92",
      accion: "0ea55760-e414-48e9-87e9-5d42b6cc7ada"
    },
    {
      nombre: "5e308f8c8c8b207adc042882",
      id: 121,
      caracterizacion: "2800dd8f-b5f2-4d24-bd7c-784a48079ca0",
      accion: "7ae848f0-6e7f-4a2e-a1c7-c0fc381d1deb"
    },
    {
      nombre: "5e308f8c8ab131cc96372ab4",
      id: 122,
      caracterizacion: "f02c5ead-7d2e-428f-8c0a-0b45bf1f3ae5",
      accion: "bd6eba8f-b8f0-4345-a827-26fa1759739d"
    },
    {
      nombre: "5e308f8c9a78139fb64a9254",
      id: 123,
      caracterizacion: "4cb7ebb3-2f8d-419d-9d2d-67a43d493d60",
      accion: "5ff8860e-39ae-4ab7-b3b5-df3b1e378569"
    },
    {
      nombre: "5e308f8c3a3427630ea5a347",
      id: 124,
      caracterizacion: "ffc6dfe4-225e-447c-a230-03c780d10d46",
      accion: "78336c2f-d696-4199-ad85-019a013fe1fc"
    },
    {
      nombre: "5e308f8cd85b4f80586d2930",
      id: 125,
      caracterizacion: "7745ec07-ae79-4aa5-9143-a94da701d3d2",
      accion: "1bb1f00f-de8c-44cd-a4b8-02195cd15675"
    },
    {
      nombre: "5e308f8ce57d048c9db63fc4",
      id: 126,
      caracterizacion: "4bb0d27a-937d-44a4-b71d-91dacd088cf3",
      accion: "b094b6ee-dac8-4a64-9937-76e16c22c1b0"
    },
    {
      nombre: "5e308f8c815507b642648097",
      id: 127,
      caracterizacion: "c32f454d-d117-4acd-a15c-34278dd941c7",
      accion: "2132d58b-3b8f-4321-98ac-5314a2b2fe8f"
    },
    {
      nombre: "5e308f8cc90614c004856599",
      id: 128,
      caracterizacion: "980d09d5-6617-43e4-9807-fb8293c7266d",
      accion: "9b673b58-22be-4cfa-835e-5b1d71c072bf"
    },
    {
      nombre: "5e308f8c966191ffbd26c814",
      id: 129,
      caracterizacion: "0673bf4c-865e-494a-9dc0-938488450b15",
      accion: "710f240f-6376-431a-8ac4-93bd1d0d2d08"
    },
    {
      nombre: "5e308f8c2ca7a48a445ee277",
      id: 130,
      caracterizacion: "9f53f9f5-8427-452c-a521-d396b1a9c070",
      accion: "e02676ae-70ba-4533-86cb-cef2938d8f25"
    },
    {
      nombre: "5e308f8c02b07990aa185fd5",
      id: 131,
      caracterizacion: "f25d47e5-f672-4138-8d7d-193e4b089a7f",
      accion: "146b9617-b20f-4a60-892e-ac28cca62b56"
    },
    {
      nombre: "5e308f8c31e7c24d87dbbeae",
      id: 132,
      caracterizacion: "65f92565-0b70-42b8-8208-ea34daa50d7c",
      accion: "cc481a4a-51fd-470f-80e4-1c608778a45d"
    },
    {
      nombre: "5e308f8cf8e795fb8762fdfa",
      id: 133,
      caracterizacion: "995e9c13-9ccd-46ec-94b1-11281d18f8e5",
      accion: "9f139b81-3028-40a4-bd6f-02dc414fe1a0"
    },
    {
      nombre: "5e308f8c7bdc1fba89909179",
      id: 134,
      caracterizacion: "d1b5fbc7-5498-4c6d-810a-a90855c10d1f",
      accion: "551bff87-6921-4066-9348-cf1e2683dbac"
    },
    {
      nombre: "5e308f8c5790273e26ea0baf",
      id: 135,
      caracterizacion: "403d5d4e-945d-46d2-b83d-50a5ed34344e",
      accion: "4a2d173b-922b-4a75-84af-2cbb8f58d8b1"
    },
    {
      nombre: "5e308f8ce370880d07a72895",
      id: 136,
      caracterizacion: "cd94b32c-fe3b-4d1f-a44c-d59799c633c6",
      accion: "b0480775-0bde-49f4-990b-9b4850fad707"
    },
    {
      nombre: "5e308f8cceae2d088380cfca",
      id: 137,
      caracterizacion: "0d2a0829-6fe5-432f-8042-445cbb4af06a",
      accion: "5ce420ea-f7d6-4b9a-9c0d-af1fda29c8b5"
    },
    {
      nombre: "5e308f8c2bfa0051ae1c87a0",
      id: 138,
      caracterizacion: "62e61b52-88e5-4597-a5ae-55c4f86d6a44",
      accion: "54ab08c9-74ca-40d1-9fe8-819b8e1c2bfc"
    },
    {
      nombre: "5e308f8c2800243baaffc94c",
      id: 139,
      caracterizacion: "bf0cd360-ba9d-46dd-83f3-e4e5a18ae465",
      accion: "769c141d-040e-48e6-ac5a-d50cf7365e58"
    },
    {
      nombre: "5e308f8cb9da30f362a273c1",
      id: 140,
      caracterizacion: "82da8977-4c13-41e6-b67e-e9cbe9b38c63",
      accion: "4a0f2ff8-f41d-4216-bfff-6ed812b43ee7"
    },
    {
      nombre: "5e308f8c8ce1001a058d1adf",
      id: 141,
      caracterizacion: "8536f171-6aa8-4c7d-8a82-163fdd33015c",
      accion: "498717d2-8d77-47f3-a4d1-2774fa1b59b6"
    },
    {
      nombre: "5e308f8c87820f7a9f505c31",
      id: 142,
      caracterizacion: "1f444639-87ab-4115-ba88-78391a59408b",
      accion: "3c3baa91-e1a1-4c11-9b74-541279409ad0"
    },
    {
      nombre: "5e308f8c2e8b63a7486f18dd",
      id: 143,
      caracterizacion: "666a2db4-5cae-4cca-b66d-cad27e27c35c",
      accion: "17805d0c-1d21-495b-97d9-84d058dbf173"
    },
    {
      nombre: "5e308f8ccfc285025e60c2e9",
      id: 144,
      caracterizacion: "77f31e9f-34b3-4128-88d7-8030cac5e775",
      accion: "478bed9f-b7a2-4b8f-bb1a-ce62f62ab448"
    },
    {
      nombre: "5e308f8ceb9d4ab48f3061d8",
      id: 145,
      caracterizacion: "8e40eeed-b6f5-47e2-ae55-e2dbeeae3fc1",
      accion: "124aea9f-db3e-46fa-b178-6fc7280f62d3"
    },
    {
      nombre: "5e308f8cdf92fbf601475152",
      id: 146,
      caracterizacion: "4596247d-e944-49fa-865c-86ab505bcf16",
      accion: "41a18ba9-5083-4470-a6a5-0ed5e36904dc"
    },
    {
      nombre: "5e308f8c9621b6208d737391",
      id: 147,
      caracterizacion: "2f15b4af-261e-4549-b117-12b70c24fa59",
      accion: "aeaf15c5-511d-4c8e-9c8e-a1c65bb05bf1"
    },
    {
      nombre: "5e308f8c7baacec35a07681d",
      id: 148,
      caracterizacion: "aa174c59-20b7-4810-8c46-171db1b774c9",
      accion: "f11413fd-395d-4d32-9b4e-eb6cee3846a6"
    },
    {
      nombre: "5e308f8ce77501f367afb101",
      id: 149,
      caracterizacion: "97e6e397-1458-4ece-8fe7-a510b5706f8d",
      accion: "aa260a1b-484e-4fe6-872b-b3ac3ff29480"
    },
    {
      nombre: "5e308f8cefc70ec26e30d801",
      id: 150,
      caracterizacion: "94c626a2-933f-4251-b115-bfefa82d007a",
      accion: "f86bd547-2c32-46b6-a878-d8a1dc6d939d"
    },
    {
      nombre: "5e308f8cd7d23d9c12024c71",
      id: 151,
      caracterizacion: "8100ec7c-647e-49b7-857d-5f6d84d2ebc9",
      accion: "20dc27ff-ff8b-4a5a-83be-a313eca02b64"
    },
    {
      nombre: "5e308f8c82878220d6f7bf7a",
      id: 152,
      caracterizacion: "eb4b51eb-be4a-41d5-bcb9-93e8c065631c",
      accion: "604a68ce-8871-4d8a-af86-a9967e061e14"
    },
    {
      nombre: "5e308f8c77d48ea65f47524c",
      id: 153,
      caracterizacion: "f9cbdc68-467c-4272-b558-9ab08f03d87e",
      accion: "16b465d4-c897-4dd8-84b4-444f91fd9eed"
    },
    {
      nombre: "5e308f8c955f0d29354e5857",
      id: 154,
      caracterizacion: "fd6d3b83-aa6a-45cd-8c49-f9195b0ff624",
      accion: "8a52cd26-b745-450b-8171-b2ddc97243a5"
    },
    {
      nombre: "5e308f8c69d287ab3f9a389d",
      id: 155,
      caracterizacion: "1e472508-3df1-45d5-83f8-a61fed8e95fb",
      accion: "127aa295-2122-41cf-8d0b-df374f090697"
    },
    {
      nombre: "5e308f8c6abe8f3ed95fd7ae",
      id: 156,
      caracterizacion: "5964fdce-119b-47e4-8dd4-6e15dbc7e253",
      accion: "8ea487a1-de83-424e-85ab-8a80a2700170"
    },
    {
      nombre: "5e308f8c02ad6f17cd8e4b1c",
      id: 157,
      caracterizacion: "87bc8738-5ce9-429f-b58f-d80b1f7fe21e",
      accion: "41177223-2013-4a6b-94ba-2d6a361b5ce6"
    },
    {
      nombre: "5e308f8cb34180c5999f72e6",
      id: 158,
      caracterizacion: "09f794ea-ddb1-49d8-89c8-df8699eadc30",
      accion: "8cf9af9d-8853-4209-8c0e-eb0af1bd40e2"
    },
    {
      nombre: "5e308f8c25cce086a9564562",
      id: 159,
      caracterizacion: "bbf4ce83-0c2b-49e8-b159-c6dff6b6c59c",
      accion: "f4d0881c-22dc-4d51-a8b7-49a310c369ed"
    },
    {
      nombre: "5e308f8cbd51ae00287478f9",
      id: 160,
      caracterizacion: "f8fb06c3-9c15-4c39-ba15-c9a60a48c8c5",
      accion: "36ec3715-8675-4701-9f4f-8b48adea67d2"
    },
    {
      nombre: "5e308f8c2085381d4992989f",
      id: 161,
      caracterizacion: "5a079135-4859-4878-b754-a011a59b1c95",
      accion: "d3c95a20-5386-4d99-8308-3b6e8a9bc725"
    },
    {
      nombre: "5e308f8cf25768a103df6d83",
      id: 162,
      caracterizacion: "9bcbb61e-a920-4f93-9761-de66ca3077e8",
      accion: "7a7917f5-90e0-44b5-98f7-c5b4859b5ba3"
    },
    {
      nombre: "5e308f8c7c6d6612807c6476",
      id: 163,
      caracterizacion: "68e15604-1d30-4b9f-acf7-5604cf200921",
      accion: "e803cd58-5748-4c2c-a4f9-3c34ebc779db"
    },
    {
      nombre: "5e308f8cf4a0d74a1d257e03",
      id: 164,
      caracterizacion: "4fe326cc-f639-47b1-953c-33b63b1f44eb",
      accion: "54831ac7-d15c-426c-84ff-cd57e30e0c47"
    },
    {
      nombre: "5e308f8ca03ec36c33a2b476",
      id: 165,
      caracterizacion: "a94d1be2-b0fb-427c-8eee-f8f95baecab5",
      accion: "0254862d-6fae-49c7-a0d0-7c6afac7c437"
    },
    {
      nombre: "5e308f8cb8bc8f2a6e8e3e6a",
      id: 166,
      caracterizacion: "c09882e9-78bf-4b1c-8cfc-6598a15cfdce",
      accion: "3e45ca06-b5d2-4437-8a58-b3fb64f38a88"
    },
    {
      nombre: "5e308f8cd39a469d6f30a9ab",
      id: 167,
      caracterizacion: "58f052a4-6b68-4cd5-a345-ff07c9f40787",
      accion: "ec6f2444-69a4-4f58-84cc-fffc3692fe0a"
    },
    {
      nombre: "5e308f8c2e2cd082fa1e86bd",
      id: 168,
      caracterizacion: "4c9f1ccc-e3ec-43de-b0b1-72427e93e86c",
      accion: "38cb08c7-98bf-46e6-8965-580751dcb1d0"
    },
    {
      nombre: "5e308f8c9c6107fdae0dc8d3",
      id: 169,
      caracterizacion: "7e05c8a8-d066-4481-b252-e99791a50e68",
      accion: "9f969276-5bec-4c46-b33e-b7c981a55927"
    },
    {
      nombre: "5e308f8c388b87a748f1207f",
      id: 170,
      caracterizacion: "6059d608-5622-4de9-b2b7-76584e0500c7",
      accion: "da5d0df0-acd3-46ce-9bdf-480aaf126535"
    },
    {
      nombre: "5e308f8c6fe2ca45e616c13f",
      id: 171,
      caracterizacion: "e1e3b670-8636-4b8a-b135-26ccb63630f6",
      accion: "eb29eba0-3793-46c5-98cf-5cd5cb629765"
    },
    {
      nombre: "5e308f8c46460b111023cae5",
      id: 172,
      caracterizacion: "4223bf15-b79f-4fa4-bed3-2ef025d549ba",
      accion: "6102b466-59e6-4a30-90d9-ec7055f5fd69"
    },
    {
      nombre: "5e308f8ce30bc2cb2c3557a7",
      id: 173,
      caracterizacion: "61834987-f579-4fd6-b93b-e43296694619",
      accion: "60d41d7c-6c2f-4d17-a2cb-2a23b968daba"
    },
    {
      nombre: "5e308f8ce278d0cdd95f1ba5",
      id: 174,
      caracterizacion: "9d292bf2-2c37-44fb-85a8-70034bfb1472",
      accion: "53d9159a-21f8-41e6-b836-8611ea8cd9c5"
    },
    {
      nombre: "5e308f8ce35ce61d5747382b",
      id: 175,
      caracterizacion: "4b287a1f-6c78-49d6-82f7-9dece117b3ae",
      accion: "df6fd639-5861-470d-b0c9-15dedd81bc01"
    },
    {
      nombre: "5e308f8ce038827768d22c4b",
      id: 176,
      caracterizacion: "c3a999da-9b4d-4f06-95af-464c6e661c0f",
      accion: "30ae05be-72a8-4c0b-8603-4e13a0e1289a"
    },
    {
      nombre: "5e308f8cb9292d3d82648d6e",
      id: 177,
      caracterizacion: "5c7d4569-ddf7-4856-9052-25ce4c8992c7",
      accion: "dd4af694-f566-4778-b666-e8c38a3fcba7"
    },
    {
      nombre: "5e308f8cd830eb6ef272f0d0",
      id: 178,
      caracterizacion: "19e09ba5-025a-4b07-af1f-b39790623b60",
      accion: "00b14c72-8cda-4cfe-b2fa-58c7acfcd61b"
    },
    {
      nombre: "5e308f8c1b9e53e9f9ba14d9",
      id: 179,
      caracterizacion: "259f49bc-a8b2-426b-a5eb-75a7ac29c18c",
      accion: "a6ec710b-8ec6-4740-8cc5-f80c5719ed60"
    },
    {
      nombre: "5e308f8c1287d2fae05d19df",
      id: 180,
      caracterizacion: "36820798-2cd1-4cbb-8bbf-d0b1fded7fda",
      accion: "8f2bd042-4ad2-4771-85ab-0c392a471698"
    },
    {
      nombre: "5e308f8cf5ac779544ba3434",
      id: 181,
      caracterizacion: "0344dad4-d24b-4949-96b7-1e540afcedd0",
      accion: "f39ce90f-6484-49d6-aa6e-9fdc912b27bc"
    },
    {
      nombre: "5e308f8c297e512c7a19de22",
      id: 182,
      caracterizacion: "fe8e8b70-ff42-4c0f-903e-622d5eb89451",
      accion: "2654dd69-6bd1-4480-9d30-a95306adfbb0"
    },
    {
      nombre: "5e308f8ca717d60346a3f226",
      id: 183,
      caracterizacion: "769cc18a-5d53-48b9-862d-0e8b4d286579",
      accion: "b2c398d0-34f3-461c-a0ca-5fc5a2aeb095"
    },
    {
      nombre: "5e308f8c5d888825ef3e8fae",
      id: 184,
      caracterizacion: "622fad80-9d28-42aa-93b0-bfd7054abcda",
      accion: "fd58be04-481a-4b5e-9d63-eebae7e99ae2"
    },
    {
      nombre: "5e308f8c1528ca2820308616",
      id: 185,
      caracterizacion: "edcabe25-658d-4e2b-b18a-120d4b666cd2",
      accion: "6efcf9fb-6308-44dc-adcf-1aede85f1ab9"
    },
    {
      nombre: "5e308f8c423e3dc419cab75f",
      id: 186,
      caracterizacion: "99f008b9-bb5c-49d9-b648-6dd393378133",
      accion: "42f1af54-c0c8-45b8-94c2-7c8740cbb542"
    },
    {
      nombre: "5e308f8c934349b35da256b6",
      id: 187,
      caracterizacion: "ca4277cf-687d-4768-8c78-88d5564c7ebb",
      accion: "1796f4d3-842d-491c-8f97-5c13527ab289"
    },
    {
      nombre: "5e308f8c9c418e12930b4cb1",
      id: 188,
      caracterizacion: "302724d0-ecf3-40bb-b7dd-3f20708eef50",
      accion: "6b774912-3ed3-4990-9b18-7bda151f7c7f"
    },
    {
      nombre: "5e308f8c9ad8c5c15fafe832",
      id: 189,
      caracterizacion: "3a0e7148-cc6b-42ae-bcef-a2ddd1aaa3da",
      accion: "857fb726-d886-4864-a96a-31f820f4927c"
    },
    {
      nombre: "5e308f8c179b8c7d252f4770",
      id: 190,
      caracterizacion: "f61e660e-fdb2-467b-a0d1-477420dbbe52",
      accion: "c1ed5a1f-4d5c-4144-95bb-f2f41650bf91"
    },
    {
      nombre: "5e308f8cd187bdab3137e1e3",
      id: 191,
      caracterizacion: "c879d143-41bc-440c-b3ee-9236d44b0bd5",
      accion: "c38abcda-6f16-4767-8867-a075ee748f49"
    },
    {
      nombre: "5e308f8c83ee39f092525f5b",
      id: 192,
      caracterizacion: "59c6476e-35e9-4505-8dc1-958a3b73f059",
      accion: "3462a7eb-3457-4164-923e-22e06d4444b4"
    },
    {
      nombre: "5e308f8c8189c194d07e5523",
      id: 193,
      caracterizacion: "e84be17d-2dc2-460e-994b-4fba26e0791d",
      accion: "6383c656-2462-4633-acce-6ae88c15d69e"
    },
    {
      nombre: "5e308f8ca7265149068881e8",
      id: 194,
      caracterizacion: "0804965d-606c-4b0b-96e1-2c180321fac7",
      accion: "9915c353-ba02-4dd7-8b7b-47a036638c76"
    },
    {
      nombre: "5e308f8cf7734cb9549f1fcc",
      id: 195,
      caracterizacion: "ed1b0781-76e2-4651-876f-1219d802cfd5",
      accion: "fc75c211-3a0e-40a8-86d8-a48b5c59ccd6"
    },
    {
      nombre: "5e308f8c438bab2ff87ec2b3",
      id: 196,
      caracterizacion: "16fbd9aa-6fa6-4c91-a4eb-8bd46c4e95bb",
      accion: "347d4ba6-7491-4977-82da-3ac076a4bfce"
    },
    {
      nombre: "5e308f8c93490fa7750b9d5f",
      id: 197,
      caracterizacion: "6e4f15a4-4e40-4216-8662-aab4675fcff5",
      accion: "5dba7aa7-6606-45a3-a3bd-524fab76de03"
    },
    {
      nombre: "5e308f8c942711c1ac36932a",
      id: 198,
      caracterizacion: "d03a8876-2e0c-4775-afc1-38aea6a8f47c",
      accion: "c7ccd56d-8745-4827-9d92-c0fd36de7be2"
    },
    {
      nombre: "5e308f8c07350664b2815f4e",
      id: 199,
      caracterizacion: "36299415-b1f9-4cf1-96eb-cc059178d98e",
      accion: "446037dc-98f1-4c55-b4f1-cfa16f8da43e"
    },
    {
      nombre: "5e308f8c1f2f483f6bead9bd",
      id: 200,
      caracterizacion: "60d0ebea-b81c-4a5e-9609-763ebf2cb2bb",
      accion: "3b1b3ee3-5b08-4374-a63c-8f7861527a9d"
    },
    {
      nombre: "5e308f8cdb0328e59ab8e032",
      id: 201,
      caracterizacion: "765e7a45-4442-4771-b4d5-32417a34ab14",
      accion: "27eb5efc-79e9-41f0-b98d-7706b05798e9"
    },
    {
      nombre: "5e308f8c5ac1d5c91d649be2",
      id: 202,
      caracterizacion: "733bc62f-da60-4d1d-ba3f-853b9bcbce04",
      accion: "021a75e8-f0f8-4ff2-98a4-efa3237dde28"
    },
    {
      nombre: "5e308f8ccf5fffe190914ec6",
      id: 203,
      caracterizacion: "a674d362-f542-4780-8585-09f9a08ac6d1",
      accion: "fe503193-1bff-4906-861b-e80fc64c9cc8"
    },
    {
      nombre: "5e308f8c28524826651ce3ad",
      id: 204,
      caracterizacion: "ffbcbc49-2df9-41d2-bdb5-3a40be01cbe3",
      accion: "8ca34b3d-eb98-4d1b-8f56-2090ea624008"
    },
    {
      nombre: "5e308f8cff5cba3a25142f1f",
      id: 205,
      caracterizacion: "9a379100-23d7-4217-9f42-c6266b14a377",
      accion: "35ee2a87-68da-4d6c-bc5f-2580467a7de7"
    },
    {
      nombre: "5e308f8c2b76cb1156b90166",
      id: 206,
      caracterizacion: "989c977a-07f7-49d3-9f50-8a40d806b1e6",
      accion: "f5f874e4-df9a-47bb-ade5-5f7108facc2e"
    },
    {
      nombre: "5e308f8c36fa780832b184d8",
      id: 207,
      caracterizacion: "c9724885-00c5-4f16-b3c8-bb343b32da81",
      accion: "ce2ef116-b6a3-4339-9edf-06a8d2b7f265"
    },
    {
      nombre: "5e308f8c3a22afa6dbb4b727",
      id: 208,
      caracterizacion: "f0fefbe8-eb5f-41cb-8225-8f7235cb644d",
      accion: "4e320293-2d28-4b30-a4b6-3f4fe064bd15"
    },
    {
      nombre: "5e308f8c4fbff397a79f2351",
      id: 209,
      caracterizacion: "a01310e2-3868-486b-b1cb-f2b568a62cd6",
      accion: "06ed6dee-eb49-4bdb-b35c-5a9fa6e9daa7"
    },
    {
      nombre: "5e308f8c05eed8d31e8fa8e1",
      id: 210,
      caracterizacion: "c25566f5-55f9-40bb-a8c6-94603b2a3a89",
      accion: "7d21146b-9b92-4c1e-9c9a-df4a3bbef321"
    },
    {
      nombre: "5e308f8c9cfd6bb7dcd8a8e6",
      id: 211,
      caracterizacion: "aabddef0-78fe-422f-a779-77bc2ee84f3a",
      accion: "771ed290-5ca8-4ca8-a835-f748107fc42f"
    },
    {
      nombre: "5e308f8cc3e5eb31ce429dfe",
      id: 212,
      caracterizacion: "e544b5cf-46a0-45db-a80a-5d7da07c0372",
      accion: "2c39f518-181e-4fca-b8dc-911ff310320d"
    },
    {
      nombre: "5e308f8cd5b6c455d56a0edd",
      id: 213,
      caracterizacion: "639609eb-7476-4330-b1b1-5f7a14b212bc",
      accion: "f77c0243-2ec6-4c54-8028-3230bd4d89a5"
    },
    {
      nombre: "5e308f8cbd20e86ade7a432a",
      id: 214,
      caracterizacion: "cb6b052f-e041-46b2-85ec-ab1286dc00b1",
      accion: "8d228f73-55ba-4d35-b683-be73bd827045"
    },
    {
      nombre: "5e308f8ca01190ea1098a286",
      id: 215,
      caracterizacion: "94c7f33f-d39b-4b69-9f27-6ef6add3c447",
      accion: "6cf88221-55c9-4027-a1db-969abfc80fe7"
    },
    {
      nombre: "5e308f8cde0611339a6569bc",
      id: 216,
      caracterizacion: "76c8cd31-280e-41f7-adca-8f9cb8829466",
      accion: "2f48882b-15fe-4383-991d-ab40b5f86e7c"
    },
    {
      nombre: "5e308f8c4c08015b866f6171",
      id: 217,
      caracterizacion: "0e392f73-2bbd-4091-aa7b-ddb5a4c5ff31",
      accion: "54cee72a-1fb1-4dad-a1ca-f833f123a39f"
    },
    {
      nombre: "5e308f8cc4354cdbed60324f",
      id: 218,
      caracterizacion: "48f7b0ba-404e-4fef-94cc-542932ab9fbe",
      accion: "2bed5055-6c35-4910-a9de-20c0f38803cf"
    },
    {
      nombre: "5e308f8ce1e750649ac271b3",
      id: 219,
      caracterizacion: "0a0d1881-3cdd-467a-9a3c-82e42994f76e",
      accion: "86ca1e51-7111-407a-834f-eac10b137ee9"
    },
    {
      nombre: "5e308f8cb4443bd0e5c4c3a0",
      id: 220,
      caracterizacion: "dedd2e1e-7e5b-4c08-a225-164d977f7ad4",
      accion: "54b1d726-09fb-4d73-bafb-1e3a2b08e8eb"
    },
    {
      nombre: "5e308f8c675016cad2c6ef41",
      id: 221,
      caracterizacion: "4b583932-09cd-4bc8-a3db-7aa6a297af8e",
      accion: "bf5355fa-fcc8-4056-b87e-bc8714def014"
    },
    {
      nombre: "5e308f8ce6f677b8e01030c1",
      id: 222,
      caracterizacion: "febaa8b8-c404-4c12-9456-8d09bb9e72cf",
      accion: "e0c9e635-b867-43fc-ad99-e5f0ef595dd5"
    },
    {
      nombre: "5e308f8c89ad87758c421a26",
      id: 223,
      caracterizacion: "abd0f767-859d-4995-b559-5a08e3fb2067",
      accion: "1b0b93ea-7dcf-475a-bd87-14f1d22ed661"
    },
    {
      nombre: "5e308f8c829f124f996fc34b",
      id: 224,
      caracterizacion: "905efb28-096b-4258-b7d3-0aba2d683fac",
      accion: "b7929312-bda2-4ab7-aa47-3cea9930bef2"
    },
    {
      nombre: "5e308f8c95f4495fb4cb93e0",
      id: 225,
      caracterizacion: "0f54927c-f234-4c1d-9f11-85313249d70e",
      accion: "96504db5-dee4-421e-88bd-d161bb3164b6"
    },
    {
      nombre: "5e308f8c297feaa3ca802f4d",
      id: 226,
      caracterizacion: "30dd94b0-2251-4435-a52b-b4bccef909b3",
      accion: "bf6db95b-56a0-493e-a805-7967b81160df"
    },
    {
      nombre: "5e308f8c582dda2be85998c3",
      id: 227,
      caracterizacion: "359a9841-3269-4d69-9eb7-a376f9f94595",
      accion: "56906ac9-ef8a-4e6b-bc84-811d074fa5f3"
    },
    {
      nombre: "5e308f8c9636ab7191959bad",
      id: 228,
      caracterizacion: "225db03f-7e96-43bd-94d0-7b93f3e7155d",
      accion: "bfe439a9-3548-464f-a279-e979457b11cd"
    },
    {
      nombre: "5e308f8c0bf9034b9ad63e60",
      id: 229,
      caracterizacion: "4c4051c2-b098-4951-befd-ec977e5e9cc4",
      accion: "acd90d62-f309-4ea8-a848-2879dba325fd"
    },
    {
      nombre: "5e308f8cdf1f95de3e8cbacf",
      id: 230,
      caracterizacion: "8ae71149-3254-469d-b214-669e576b705d",
      accion: "17d2899c-4d5a-479d-8609-1fbf36659bc6"
    },
    {
      nombre: "5e308f8c2f40a716c3b0a364",
      id: 231,
      caracterizacion: "0cc4cd36-f724-4edc-9847-c25f72ac251e",
      accion: "8be94de0-f243-4002-869b-1826df80a95e"
    },
    {
      nombre: "5e308f8c31656b9e9c29782d",
      id: 232,
      caracterizacion: "5b87679b-5d99-48d0-8611-94fa993c2818",
      accion: "c748d13f-9bc6-48fb-90ed-09b075583f0a"
    },
    {
      nombre: "5e308f8c16d573568c2bb9ec",
      id: 233,
      caracterizacion: "0fee7c93-d082-4ae1-9aeb-2b1392d45e15",
      accion: "d06fa4dc-4eac-4f16-8602-02448a6a8be0"
    },
    {
      nombre: "5e308f8c853baa49beae16cf",
      id: 234,
      caracterizacion: "c59a4135-9100-4cf5-aa52-8bcb74cbb795",
      accion: "dd8b6f72-23e3-40b6-b1ae-a669fcd92ce4"
    },
    {
      nombre: "5e308f8cd9cdcfa2cc26bfec",
      id: 235,
      caracterizacion: "92905bd4-b470-4f6c-a137-6ec87eeed6f1",
      accion: "d3f6dffb-e32f-4ce0-9e14-cf020ac71c16"
    },
    {
      nombre: "5e308f8cacb6dee9b9b15073",
      id: 236,
      caracterizacion: "64fba243-3e06-4b41-abac-b88984248672",
      accion: "74af52ed-2deb-4c88-9c13-bd3cc0cb9a00"
    },
    {
      nombre: "5e308f8c40623dc28d2271fe",
      id: 237,
      caracterizacion: "592f6e2a-1d81-4af6-95db-b2cc6b55e535",
      accion: "f80a3b6c-b1e3-46e5-91cb-2db4d53fc4f4"
    },
    {
      nombre: "5e308f8c0240b0079a350275",
      id: 238,
      caracterizacion: "3db8d5ca-7dd2-469b-8859-f8348c55cff5",
      accion: "c4244703-698d-4971-a4f1-b90a9fc4b7b1"
    },
    {
      nombre: "5e308f8c1e79ff69422b6f5d",
      id: 239,
      caracterizacion: "fe02cfb2-8d02-4882-94b8-93add2a502b1",
      accion: "0145a6b1-f92e-474a-8f76-a764188900ef"
    },
    {
      nombre: "5e308f8cbada5739e858069c",
      id: 240,
      caracterizacion: "fd3b482c-38c9-42b6-a532-bc788a1ae75c",
      accion: "c27d83e3-2d4e-484e-b942-ac856e7b93af"
    },
    {
      nombre: "5e308f8cc51b1b659907d9b2",
      id: 241,
      caracterizacion: "a5b097b9-2011-415a-be30-cd7f792c8a04",
      accion: "7f692b54-06d5-4177-bca3-7afebbb4af1e"
    },
    {
      nombre: "5e308f8c20916d66d66f5c43",
      id: 242,
      caracterizacion: "8de36b25-8795-45ed-aa31-b35a9f06bb0d",
      accion: "b0cac172-2cb8-447a-9a1f-969ce938ba9b"
    },
    {
      nombre: "5e308f8c30197d3a1597b1c3",
      id: 243,
      caracterizacion: "6c850d27-3f18-45ed-9f3f-fb3b79944e5b",
      accion: "90b7d5e9-9344-4033-b52c-403d0f343579"
    },
    {
      nombre: "5e308f8ce156c3c953d2a891",
      id: 244,
      caracterizacion: "62ad93a9-aa0d-4e4a-849d-53d88c6a3fff",
      accion: "3f0a9104-3b11-46b1-8138-d8aaacceed2b"
    },
    {
      nombre: "5e308f8c862de7cbf79b4edd",
      id: 245,
      caracterizacion: "3d50a45b-2316-427d-ae81-30b89faca1dc",
      accion: "ea042e0b-0c4e-40c4-a4c6-5be615ca9064"
    },
    {
      nombre: "5e308f8c5f0f4c1489bb4393",
      id: 246,
      caracterizacion: "2b752934-c140-4300-90e2-f856b84e4d13",
      accion: "8fe95b56-d4bc-4e59-97bd-79f1960ffc2b"
    },
    {
      nombre: "5e308f8cda3957912b0b33bb",
      id: 247,
      caracterizacion: "d5c6ebbc-9fd6-405c-a0b9-f65cb036e5c6",
      accion: "d512c5ea-f209-40a7-a31b-8479120f6b22"
    },
    {
      nombre: "5e308f8cb8ae328594393f57",
      id: 248,
      caracterizacion: "d0c7f32b-565c-4b63-ba3f-79717702b390",
      accion: "33b1399c-98cc-496b-8c54-182de12dd529"
    },
    {
      nombre: "5e308f8ce08f69c113e04955",
      id: 249,
      caracterizacion: "a6c28a95-cb9c-482e-b95b-f48aeb2ff138",
      accion: "ab93134c-ff33-4a8b-b501-36c70c838459"
    },
    {
      nombre: "5e308f8c54fae0f57a4ef1ee",
      id: 250,
      caracterizacion: "45ce5da4-9a64-4d8f-b6a0-55bfdc962836",
      accion: "c5a7eb80-c87a-4bf5-9b32-8520f5ee6154"
    },
    {
      nombre: "5e308f8c49e87825f3c258fc",
      id: 251,
      caracterizacion: "e1f03692-eebf-4374-8d33-872d8a260407",
      accion: "6ea4b909-a293-414f-afd7-03eae99cbe24"
    },
    {
      nombre: "5e308f8c41fce3218024cfb7",
      id: 252,
      caracterizacion: "89021a8d-f44f-4a9b-aa90-eee0c32dd673",
      accion: "433921c0-4f58-47ec-a0e1-bec20d244a56"
    },
    {
      nombre: "5e308f8c49055e8c4efef861",
      id: 253,
      caracterizacion: "5bded6a3-f2fc-476a-ae73-d1a4d5a90283",
      accion: "54daa444-f2aa-4ef4-b232-6ae30cd23b13"
    },
    {
      nombre: "5e308f8cec6301916e8a5fa0",
      id: 254,
      caracterizacion: "58af8f14-c586-43d3-82a6-7530ed06b2c2",
      accion: "d87cf356-f5de-4620-b05b-9c4bc65e2254"
    },
    {
      nombre: "5e308f8cfbd6058466e4a8bd",
      id: 255,
      caracterizacion: "ba179f2e-6aa8-4e43-bad0-f59452ecc4df",
      accion: "2b2cdefe-eb97-4846-ab4d-89fb6e6e3d6d"
    },
    {
      nombre: "5e308f8ca621178159265470",
      id: 256,
      caracterizacion: "f971e481-5fbc-41dd-b820-c29009d0da30",
      accion: "afc7e3a8-c557-4532-9c28-1bf67bf9ebad"
    },
    {
      nombre: "5e308f8c9724c0368b1c4e9d",
      id: 257,
      caracterizacion: "c00ddd77-ead2-4fde-a54b-00ae17fa4ee9",
      accion: "769dabfd-f188-4675-8517-cc0d4cd332c2"
    },
    {
      nombre: "5e308f8cbfef7aac1a9dbaee",
      id: 258,
      caracterizacion: "40206435-45c9-4610-bd3a-34ae35470725",
      accion: "e65b30ac-0c9d-4dc7-95ce-5eef607cd700"
    },
    {
      nombre: "5e308f8c7e0f55d52013b4b1",
      id: 259,
      caracterizacion: "607546f3-36d3-433b-a681-8f0d6946fa52",
      accion: "8af1fe84-7aca-4e47-8b1c-78cbf20600d0"
    },
    {
      nombre: "5e308f8c8542c25a54070d47",
      id: 260,
      caracterizacion: "73620b47-06a5-4dca-a8cf-e5184b5df844",
      accion: "2e6c6b86-495f-48ff-b99c-1712a62231a0"
    },
    {
      nombre: "5e308f8c73aee136b3eac940",
      id: 261,
      caracterizacion: "bea2e244-b521-4104-8d0f-d2f425c5899a",
      accion: "c7395cdf-d816-4020-81d0-25b34e0aa8e0"
    },
    {
      nombre: "5e308f8c39f931b803cff179",
      id: 262,
      caracterizacion: "051ec9a5-ef5e-480b-9668-462f7d3ad450",
      accion: "fe0b231d-4c7a-4545-afac-ac6a9ab2e1c5"
    },
    {
      nombre: "5e308f8cb9c1c7b1422bacdd",
      id: 263,
      caracterizacion: "d0c5919c-b893-4938-b2ba-ab20eb536613",
      accion: "e3fad079-cf15-4c49-b0ab-b80b9d7a61cc"
    },
    {
      nombre: "5e308f8c83164f60966fa842",
      id: 264,
      caracterizacion: "2c335ac7-b598-4fdf-90da-439fcea950bc",
      accion: "60a14129-0d44-4490-9e1f-fc035b037180"
    },
    {
      nombre: "5e308f8c7628943f5d720518",
      id: 265,
      caracterizacion: "b535bf7a-6f49-448c-9e24-b6e65c133a29",
      accion: "33fd590b-d6dd-4520-8666-b47d7e912023"
    },
    {
      nombre: "5e308f8c135d3856b8fbe502",
      id: 266,
      caracterizacion: "6d9e719e-0ad1-46a2-ae9c-e373bfceea43",
      accion: "9e291150-efb8-4244-ad18-43dee442c276"
    },
    {
      nombre: "5e308f8c003a1cb20944a5b5",
      id: 267,
      caracterizacion: "adbaa0d3-7bfc-4221-a869-120817585e42",
      accion: "38c51781-6706-43ce-a77e-abd1e4aa7fbe"
    },
    {
      nombre: "5e308f8cb85bc0c1b642fa5d",
      id: 268,
      caracterizacion: "64287c99-d21b-459a-9ac3-3ba6044dcb9d",
      accion: "e830cba1-751a-4b25-af5c-31c4754874d2"
    },
    {
      nombre: "5e308f8cf9fff432ab0f6585",
      id: 269,
      caracterizacion: "701150b7-d02c-4cde-8289-eba83e782651",
      accion: "34b3ba46-274d-4194-b3ce-a10915aeb3b7"
    },
    {
      nombre: "5e308f8c0b3a8f93b6c159dd",
      id: 270,
      caracterizacion: "c983dd85-b034-47e2-97a6-31aed8ac0d58",
      accion: "a992e9ba-112b-4a5f-90bf-0a2b2b55f527"
    },
    {
      nombre: "5e308f8c65754523366fd852",
      id: 271,
      caracterizacion: "c4bf1617-dde8-4553-9ebd-323742e43401",
      accion: "f5b961af-b12e-4411-aa77-7ea3fbc3cce0"
    },
    {
      nombre: "5e308f8c68f85208ad6e0bf7",
      id: 272,
      caracterizacion: "c73b1e79-e678-4d50-9f4d-87a6ccb1eacf",
      accion: "db11dad1-305a-4200-936c-3b79cde3ff14"
    },
    {
      nombre: "5e308f8c3259c561621800fe",
      id: 273,
      caracterizacion: "4681c6fe-c2d0-4c7c-b712-ef267629b40b",
      accion: "0ee16b0f-fa1d-4560-90ed-c192736e759d"
    },
    {
      nombre: "5e308f8ce4381bcd8d61970c",
      id: 274,
      caracterizacion: "72b6456e-6b5d-44eb-a1a5-9b7d81db956e",
      accion: "9aec9d23-5b65-4f06-b74e-5cda13e5ca49"
    },
    {
      nombre: "5e308f8c3441352d9d423a88",
      id: 275,
      caracterizacion: "637427f4-2112-4e0f-b2ec-f4b8c768c182",
      accion: "a47d9d4a-9c87-47c0-a5c1-9d63d16a1648"
    },
    {
      nombre: "5e308f8c7377ce940674a696",
      id: 276,
      caracterizacion: "d9e6812e-0849-4cef-bbb8-c0a42de611f2",
      accion: "2b2f43fb-7786-490d-9c51-faf1518b8827"
    },
    {
      nombre: "5e308f8c2135f24266ec2cb7",
      id: 277,
      caracterizacion: "08abc071-5428-4c03-ae77-6bfa1429424f",
      accion: "2301becb-9146-448e-bf3c-9f4c42ee2a91"
    },
    {
      nombre: "5e308f8c9bd4b32cff000a82",
      id: 278,
      caracterizacion: "8fdffb29-cfc5-4c16-9537-28ad6d0778d5",
      accion: "958d5a2c-47d1-47a0-88fe-b3644022c100"
    },
    {
      nombre: "5e308f8c730e30a976c870ba",
      id: 279,
      caracterizacion: "525522c4-8bb1-4180-8b80-335cff4a6c09",
      accion: "422e094b-2cbc-41dd-add6-cc6a3aaf8830"
    },
    {
      nombre: "5e308f8cea82d0075e880f39",
      id: 280,
      caracterizacion: "1edacefc-80b0-46a4-b86c-5c272ee84890",
      accion: "fe7edd3c-0a87-4570-945a-eca88e57a1d8"
    },
    {
      nombre: "5e308f8cb9ab1ded4df59418",
      id: 281,
      caracterizacion: "978cbcf5-0920-408c-b55d-46d45fa0f5bb",
      accion: "8bfcc5fb-fe5c-4f83-bf6e-b5c09ddba4ba"
    },
    {
      nombre: "5e308f8c7c421abcd198a060",
      id: 282,
      caracterizacion: "c14c9674-431a-4129-92a9-690d0a77987c",
      accion: "75752505-db8d-4eb9-87a9-4c1bc3acbb40"
    },
    {
      nombre: "5e308f8c80e98ebbc1da424f",
      id: 283,
      caracterizacion: "a60794a1-fafd-4b2f-84cd-86ff591d07e5",
      accion: "710cc126-8571-4557-9400-9e7149357b19"
    },
    {
      nombre: "5e308f8c221ecb549d7defc1",
      id: 284,
      caracterizacion: "628ece7c-93e4-4d29-aeca-275ce6e5d2be",
      accion: "b99c9e5a-0dba-4e58-af55-4c307a2cd85d"
    },
    {
      nombre: "5e308f8c803db3b68b9a3b37",
      id: 285,
      caracterizacion: "6e92f20d-ff1b-4b7a-955d-9d8be5072aba",
      accion: "2815d6d2-760d-42bb-8dd0-2da8c2e33935"
    },
    {
      nombre: "5e308f8c16da0171b6905be2",
      id: 286,
      caracterizacion: "d0602e8d-af88-41de-aec6-25d484c3d78f",
      accion: "0f3bf517-8873-4e36-9d2f-b6348f742f0c"
    },
    {
      nombre: "5e308f8c17ce6fb3157c6b66",
      id: 287,
      caracterizacion: "20fa9401-5eae-43df-b95c-902541691cda",
      accion: "d1dca9e9-0c13-4ef2-aa25-e49c82817d47"
    },
    {
      nombre: "5e308f8cf051932e10cd1b39",
      id: 288,
      caracterizacion: "248d0a18-753a-41b3-b85e-accc7d74c4fa",
      accion: "d4e28f5e-92b3-4568-a2df-cfdba160c8d4"
    },
    {
      nombre: "5e308f8cde26d0ea99369363",
      id: 289,
      caracterizacion: "fd03340a-943b-4a0d-8d36-56ef3650323c",
      accion: "a57b9b87-de58-43df-a0b4-2c07051ba29c"
    }
  ];
  return (
    <div className="p-grid">
      <div className="p-col-12">
        <DataTable
          style={{ textAlign: "Center" }}
          value={cuentas}
          paginator={true}
          rows={10}
          header={"Cuentas"}
          emptyMessage="No records found"
        >
          <Column field="nombre" header="Nombre" filter={true} />
          <Column field="id" header="Identidad" filter={true} />
          <Column
            field="caracterizacion"
            header="Caracterizacion"
            filter={true}
          />
          <Column field="acciones" header="Acciones" filter={true} />
        </DataTable>
      </div>
      <Menu model={items} popup={true} ref={el => (menu = el)} />
    </div>
  );
};

export default MainTable;
