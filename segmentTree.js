class SegmentTree {
  /**
   * @param {number[]} inputArray
   * @param {function} operation - sum, min 같은 이항 함수
   * @param {number} operationFallback - sum의 0이나 min의 Infinity 같은 연산의 fallback 값
   */
  constructor(inputArray, operation, operationFallback) {
    this.inputArray = inputArray;
    this.operation = operation;
    this.operationFallback = operationFallback;

    // 세그먼트 트리를 표현하는 배열 생성 (실제 트리 구조를 사용하지 않는다.)
    this.segmentTree = this.initSegmentTree(this.inputArray);

    this.buildSegmentTree();
  }

  initSegmentTree(inputArray) {
    let segmentTreeArrayLength;
    const inputArrayLength = inputArray.length;

    if (inputArrayLength / 2 === 0) {
      // 원본 배열의 길이가 2의 배수라면
      segmentTreeArrayLength = 2 * inputArrayLength - 1;
    } else {
      // 원본 배열의 길이가 2의 배수가 아니라면
      // 배열 길이보다 큰 2의 배수 가장 작은 값을 찾는다.
      // 완전 이진 트리를 만들어서 빈 공간을 null로 채워야하기 때문이다.
      const currentPower = Math.floor(Math.log2(inputArrayLength));
      const nextPower = currentPower + 1;
      const nextPowerOfTwoNumber = 2 ** nextPower;
      segmentTreeArrayLength = 2 * nextPowerOfTwoNumber - 1;
    }

    return new Array(segmentTreeArrayLength).fill(null);
  }

  // 세그먼트 트리 만들기
  buildSegmentTree() {
    const leftIndex = 0;
    const rightIndex = this.inputArray.length - 1;
    const position = 0;
    this.buildTreeRecursively(leftIndex, rightIndex, position);
  }

  // 세그먼트 트리를 재귀적을 만든다.
  buildTreeRecursively(leftInputIndex, rightInputIndex, position) {
    // 작은 인덱스랑 큰 인덱스가 같다면 배열 나누는 게 끝났으니 Leaf 노드에 도착했다는 뜻이다.
    // 입력 배열에서 세그먼트 트리로 Leaf 값을 복사한다.
    if (leftInputIndex === rightInputIndex) {
      this.segmentTree[position] = this.inputArray[leftInputIndex];
      return;
    }

    // 배열을 둘로 나눠서 각각 재귀적으로 처리한다.
    // (0 ~ 9)면 (0 ~ 4), (5 ~ 9) 둘로 나뉨
    const middleIndex = Math.floor((leftInputIndex + rightInputIndex) / 2);
    // 왼쪽
    this.buildTreeRecursively(leftInputIndex, middleIndex, this.getLeftChildIndex(position));
    // 오른쪽
    this.buildTreeRecursively(middleIndex + 1, rightInputIndex, this.getRightChildIndex(position));

    // 모든 Leaf 노드가 다 찼으니(위의 if문에서 채움)
    // 주어진 연산 함수를 써서 트리를 상향식으로 채운다.
    this.segmentTree[position] = this.operation(
      this.segmentTree[this.getLeftChildIndex(position)],
      this.segmentTree[this.getRightChildIndex(position)],
    );
  }

  // this.operation function에 맞게 범위 쿼리를 실행한다.
  rangeQuery(queryLeftIndex, queryRightIndex) {
    const leftIndex = 0;
    const rightIndex = this.inputArray.length - 1;
    const position = 0;

    return this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      leftIndex,
      rightIndex,
      position,
    );
  }

  // 범위 쿼리를 재귀적으로 실행
  rangeQueryRecursive(queryLeftIndex, queryRightIndex, leftIndex, rightIndex, position) {
    if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {
      // 범위가 완전히 겹칠 때
      return this.segmentTree[position];
    }

    if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {
      // 안 겹침
      return this.operationFallback;
    }

    // 부분적으로 겹칩
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    const leftOperationResult = this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      leftIndex,
      middleIndex,
      this.getLeftChildIndex(position),
    );

    const rightOperationResult = this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      middleIndex + 1,
      rightIndex,
      this.getRightChildIndex(position),
    );

    return this.operation(leftOperationResult, rightOperationResult);
  }

  // 왼쪽 자식 인덱스
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  // 오른쪽 자식 인덱스
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
}

const seg = new SegmentTree([2, 5, 4, 6, 8], Math.min, Infinity);
console.log(seg.rangeQuery(0, 2));
console.log(seg.rangeQuery(1, 3));
console.log(seg.rangeQuery(2, 4));