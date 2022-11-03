export const boards = [
  {
    id: "98d29948-3bc8-4c1a-850c-662438daf199",
    headerText: "Todo",
    btn: { value: "Добавить задачу", flagPlus: true },
  },
  {
    id: "6ca20dc4-1c4c-4d0d-9d01-d83dcd47ed42",
    headerText: "In progress",
    btn: { value: "Добавить задачу", flagPlus: true },
  },
  {
    id: "9a582951-3ab7-4bf9-9332-fe7ff2a3b0fc",
    headerText: "Done",
  },
];

export const filters = [
  { id: 1, value: "Комментарий", checked: false, flag: "comments" },
  { id: 2, value: "Описание", checked: false, flag: "description" },
  { id: 3, value: "Тег", checked: false, flag: "tags" },
];

export const tags = [
  "violet",
  "red",
  "green",
  "orange",
  "blue",
  "darkBlue",
  "yellow",
  "lightGreen",
];

export const cards = [
  {
    id: "0da74905-cf9d-460b-a07e-0a085e410070",
    name: "Накормить кота Васю",
    tags: [
      "violet",
      "green",
      "red",
      "blue",
      "orange",
      "lightGreen",
      "darkBlue",
      "yellow",
    ],
    comments: [
      {
        id: "9f1dcc94-d402-4454-922c-09f1bde2b088",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    description: "Описание 1",
    boardId: "9a582951-3ab7-4bf9-9332-fe7ff2a3b0fc",
  },
  {
    id: "88394ae6-5817-4829-b458-d7ec65e72feb",
    name: "Накормить кота Мурзика",
    tags: ["orange", "lightGreen", "darkBlue", "yellow"],
    comments: [
      {
        id: "9f1dcc94-d402-4454-922c-09f1bde2b088",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "94cd933a-5699-44d6-92cc-de4af7e29a61",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "a28c154c-baf1-43b5-b92f-8feedc2442eb",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    description: "Описание 1",
    boardId: "9a582951-3ab7-4bf9-9332-fe7ff2a3b0fc",
  },
  {
    id: "cbab3a3f-d09f-4e0c-a664-df1c314081ea",
    name: "Пофиксить баг 345",
    tags: ["violet", "green", "red", "blue"],
    description: "Описание 1",
  },
  {
    id: "5a6d65b0-5c29-415d-abb5-e1e73c4894b3",
    name: "Пофиксить баг 666",
    tags: ["red", "blue", "orange"],
    comments: [
      {
        id: "9cc2ddb5-32f6-4dfe-9842-7d519661a0c7",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "3643c221-9fe0-4d21-9455-a0c50f62a9bf",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "09be6a22-c74c-40be-9fd5-94306f77503a",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    boardId: "98d29948-3bc8-4c1a-850c-662438daf199",
  },
  {
    id: "72757081-1679-49cd-933b-f9179165bac4",
    name: "Выгулить Тузика",
    tags: [
      "violet",
      "red",
      "blue",
      "orange",
      "lightGreen",
      "darkBlue",
      "yellow",
    ],
    boardId: "98d29948-3bc8-4c1a-850c-662438daf199",
  },
  {
    id: "f7cad59e-f4b2-4271-b70b-0042f6a194f6",
    name: "Подать резюме в компанию",
    tags: ["lightGreen", "darkBlue", "yellow"],
    comments: [
      {
        id: "6f68a26b-e9ca-4d9c-aa53-ac2933af7d3b",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "3e637668-3765-4e29-a6f2-a298c66a584f",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "2ce21cfd-b977-4643-b9ce-6238d89adf57",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    description: "Описание 1",
    boardId: "98d29948-3bc8-4c1a-850c-662438daf199",
  },
  {
    id: "f2feee71-0334-4fa9-853b-1e5bf700e02f",
    name: "Подготовить отчет",
    tags: ["blue", "orange"],
    comments: [
      {
        id: "2ce21cfd-b977-4643-b9ce-6238d89adf58",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "2ce21cfd-b977-4643-b9ce-6238d89adf37",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "2ce21cfd-b977-r643-b9ce-6238d89adf57",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    description: "Описание 1",
    boardId: "6ca20dc4-1c4c-4d0d-9d01-d83dcd47ed42",
  },
  {
    id: "76fffe94-2b02-41c0-9539-e452811b565e",
    name: "Написать письмо Деду Морозу",
    tags: ["orange", "lightGreen", "darkBlue", "yellow"],
    description: "Описание 1",
    boardId: "6ca20dc4-1c4c-4d0d-9d01-d83dcd47ed42",
  },
  {
    id: "f13490dd-ecb8-4ba9-a718-f5e056a2b058",
    name: "Не забыть покушать",
    tags: ["blue", "orange"],
    comments: [
      {
        id: "2c221cfd-b977-4643-b9ce-6238d89adf57",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "1ce21cfd-b977-4643-b9ce-6238d89adf57",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "2ce21cfd-b977-4643-b9ce-6238d89adf50",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    boardId: "6ca20dc4-1c4c-4d0d-9d01-d83dcd47ed42",
  },
  {
    id: "a395e635-dbed-4f00-93f8-5e03c12e3bc5",
    name: "Приготовить обед",
    tags: ["lightGreen", "darkBlue", "yellow"],
    comments: [
      {
        id: "11e21cfd-b977-4643-b9ce-6238d89adf57",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "22121cfd-b977-4643-b9ce-6238d89adf57",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "2ce21cfd-b977-4643-b9ce-6238d89adf90",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    description: "Описание 1",
    boardId: "6ca20dc4-1c4c-4d0d-9d01-d83dcd47ed42",
  },
  {
    id: "6462cc8e-8b7f-42e0-8f96-6e9feedc0c0c",
    name: "А еще приготовить ужин",
    tags: [
      "violet",
      "green",
      "red",
      "blue",
      "orange",
      "lightGreen",
      "darkBlue",
      "yellow",
    ],
    boardId: "9a582951-3ab7-4bf9-9332-fe7ff2a3b0fc",
  },
  {
    id: "9f90793c-895d-4671-a94d-adf5ed92d47a",
    name: "Прочитать 10 страниц на языке",
    tags: ["blue", "orange"],
    comments: [
      {
        id: "2ce21cfd-ff77-4643-b9ce-6238d89adf57",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "75e21cfd-b977-4643-b9ce-6238d89adf57",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "2ce21cfd-b977-4643-b9ce-6238d89adf57",
        name: "Товарищ Комментатор",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    description: "Описание 1",
    boardId: "9a582951-3ab7-4bf9-9332-fe7ff2a3b0fc",
  },
];
