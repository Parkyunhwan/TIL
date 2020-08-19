# ✍**간단한 정리**✍

## ✍시퀀스 컨테이너와 연관 컨테이너
• Sequence 컨테이너 => (벡터, 리스트 데크)

    * 원소를 순차적으로 저장함

• Associated 컨테이너 => (set, multiset, map 그리고 multimap)

    * 원소를 연관 키값으로 접근

## ✍배열과 이중링크드리스트 구현의 차이 (시퀀스 컨테이너)
• **배열**로 구현시 삽입, 삭제는 O(n) 나머지는 O(1) ⇒ ex) `std::vector<T>`

• **이중링크드리스트**로 구현시 임의 접근은 O(n) 나머지는 O(1) ⇒ ex) `std::list<T>`

::: tip std::list<T> 는 연속적인 임의접근을 어떻게 개선 했을까?

• 반복자(iterator)증가 연산을 통해 이전 노드를 에서 다음 노드로 접근을 함

• 이렇게 하면 연속적 노드 접근 시 O(1) 시간이 소요된다.

## ✍ios::base::sync_with_stdio(false)시 주의사항

::: warning ios::sync_with_stdio는 cpp의 iostream을 c의 stdio와 동기화시켜주는 역할을 한다.

기본값인 true일 때는 cout << "HI"; printf("BYE"); cout<<"hi" 가 순서대로 출력되지만, false일때는 어떤 순서로 출력될지 알 수가 없다.

그렇기 때문에 ios::sync_with_stdio(false); 를 추가하면,

iostream 함수인 cin/ cout을 stdio 함수인 getchar()와 같이 쓰시면 안된다고 한다.

:::