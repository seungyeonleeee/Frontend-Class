import { LinkedList } from "./linkedList.mjs";

// 연결리스트의 stack 추상자료형 함수 기능 4개

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  // 데이터 삽입
  push(data) {
    this.list.insertAt(0, data);
  }

  // 데이터 제거
  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }

  // 데이터 참조
  peek() {
    return this.list.getNodeAt(0);
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Stack };
