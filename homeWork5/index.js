// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
const limitGamePole = 8;
const captionLine = ["A", "B", "C", "D", "E", "F", "G", "H"];

function createChessBoard(enableCaption) {
  const rootElement = document.createElement("div");
  rootElement.classList.add("box");
  const gamePoleElement = document.createElement("table");
  gamePoleElement.classList.add("chess-board");
  gamePoleElement.classList.add("centered");
  const mainboardElement = document.createElement("tbody");
  mainboardElement.classList.add("main-board");
  if (enableCaption) {
    mainboardElement.classList.add("caption");
  }
  gamePoleElement.appendChild(mainboardElement);
  rootElement.appendChild(gamePoleElement);
  document.body.appendChild(rootElement);

  const parentElem = enableCaption
    ? document.querySelector("tbody.caption")
    : document.querySelector("tbody.main-board");
  if (enableCaption) {
    createCaptionRow(gamePoleElement, "head");
  }
  for (let y = limitGamePole; y > 0; y--) {
    const rowElement = document.createElement("tr");
    for (let x = 0; x < limitGamePole; x++) {
      if (enableCaption && x === 0) {
        rowElement.appendChild(createCaptionElem(y));
      }
      const colElement = document.createElement("td");
      colElement.id = `${captionLine[x]}${y}`;
      rowElement.appendChild(colElement);
    }
    if (enableCaption) {
      rowElement.appendChild(createCaptionElem(y));
    }
    parentElem.appendChild(rowElement);
  }
  if (enableCaption) {
    createCaptionRow(gamePoleElement, "foot");
  }

  const pieces = [];
  pieces.push({
    id: "king",
    name: "король",
    black: "♚",
    white: "♔",
    img: null,
  });
  pieces.push({
    id: "queen",
    name: "ферзь ",
    black: "♛",
    white: "♕",
    img: null,
  });
  pieces.push({
    id: "bishop",
    name: "слон",
    black: "♝",
    white: "♗",
    img: null,
  });
  pieces.push({
    id: "knight",
    name: "конь",
    black: "♞",
    white: "♘",
    img: null,
  });
  pieces.push({ id: "rook", name: "ладья", black: "♜", white: "♖", img: null });
  pieces.push({ id: "pawn", name: "пешка", black: "♟", white: "♙", img: null });
}
//createChessBoard(false);

function createCaptionElem(txtValue) {
  const captionElem = document.createElement("th");
  captionElem.innerHTML = txtValue;
  return captionElem;
}
function createCaptionRow(tableElement, typeRow) {
  const rowElement =
    typeRow === "head"
      ? tableElement.createTHead()
      : tableElement.createTFoot();
  rowElement.appendChild(createCaptionElem(" "));
  for (let x = 0; x < limitGamePole; x++) {
    rowElement.appendChild(createCaptionElem(captionLine[x]));
  }
  rowElement.appendChild(createCaptionElem(" "));
  return rowElement;
}

document.body.appendChild(document.createElement("hr"));
createChessBoard(true);
document.body.appendChild(document.createElement("hr"));
// 2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
const pieces = [];
pieces.push({
  id: "king",
  name: "король",
  shortname: "K",
  black: "♚",
  white: "♔",
  img: null,
  defaultPlaceW: ["E1"],
  defaultPlaceB: ["E8"],
});
pieces.push({
  id: "queen",
  name: "ферзь ",
  shortname: "Q",
  black: "♛",
  white: "♕",
  img: null,
  defaultPlaceW: ["D1"],
  defaultPlaceB: ["D8"],
});
pieces.push({
  id: "bishop",
  name: "слон",
  shortname: "B",
  black: "♝",
  white: "♗",
  img: null,
  defaultPlaceW: ["C1", "F1"],
  defaultPlaceB: ["C8", "F8"],
});
pieces.push({
  id: "knight",
  name: "конь",
  shortname: "Kn",
  black: "♞",
  white: "♘",
  img: null,
  defaultPlaceW: ["B1", "G1"],
  defaultPlaceB: ["B8", "G8"],
});
pieces.push({
  id: "rook",
  name: "ладья",
  shortname: "R",
  black: "♜",
  white: "♖",
  img: null,
  defaultPlaceW: ["A1", "H1"],
  defaultPlaceB: ["A8", "H8"],
});
pieces.push({
  id: "pawn",
  name: "пешка",
  shortname: "P",
  black: "♟",
  white: "♙",
  img: null,
  defaultPlaceW: ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
  defaultPlaceB: ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"],
});

function placementChessPieces(typeShow) {
  for (chessPiece of pieces) {
    for (placePieceW of chessPiece.defaultPlaceW) {
      const pieceElem = document.getElementById(placePieceW);
      pieceElem.innerHTML = typeShow ? chessPiece.shortname : chessPiece.white;
      pieceElem.classList.add("whitetxt");
    }
    for (placePieceB of chessPiece.defaultPlaceB) {
      const pieceElem = document.getElementById(placePieceB);
      pieceElem.innerHTML = typeShow ? chessPiece.shortname : chessPiece.black;
    }
  }
}
//placementChessPieces(true);

// 3. *Заменить буквы, обозначающие фигуры картинками

placementChessPieces(false);
