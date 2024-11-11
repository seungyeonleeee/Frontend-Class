// 연결리스트 추상자료형 만들기

// 각각의 아이템을 만들어 내기 위한 class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;

// console.log(node1.data);
// console.log(node1.next.data);
// console.log(node1.next.next.data);
// 1, 2, 3

// 연결리스트는 헤드가 무조건 있어야 함
// 헤드가 있어야 next가 파생된다

// 아이템을 연결시키는 class
class LinkedList {
  constructor() {
    // 헤드와 갯수가 몇개가 들어올지 모른다
    this.head = null; // 가장 첫번째 인덱스
    this.count = 0; // 배열의 length
  }

  // 출력
  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode !== null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode !== null) {
        text += ", ";
      }
    }

    text += "]";
    console.log(text);
  }

  // 모든 데이터 제거
  clear() {
    this.head = null;
    this.count = 0;
  }

  // 특정한 인덱스에 데이터 삽입
  insertAt(index, data) {
    // 유효성검사
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다!");
    }

    // 새로 들어올 아이템
    let newNode = new Node(data);

    if (index === 0) {
      // 메인헤드가 되고 싶은 경우
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // 중간, 끝에 끼는 경우
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      // 끼어들고 싶은 직전까지 반복
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }

  // 마지막에 삽입
  insertLast(data) {
    this.insertAt(this.count, data);
  }

  // 특정 인덱스 삭제
  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없습니다!");
    }

    let currentNode = this.head;

    if (index === 0) {
      // 메인헤드를 제거할 때
      let deletedNode = this.head;
      this.head = this.head.next;
      this.count--;
      return deletedNode;
    } else {
      // 중간 제거
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let deletedNode = currentNode;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deletedNode;
    }
  }

  // 마지막 인덱스 삭제
  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  // 특정 인덱스값을 읽어오기
  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

export { Node, LinkedList };
