# Priority_queue

## ✍기본 형태
* **priority_queue<T, Container, Compare>**
  * 원하는 자료형 **T**, 원하는 **Container** (기본 vector), 원하는 비교 함수 클래스 **Compare**
  * `#include <queue>` : queue 헤더 파일을 include 할 것

## ✍기본 함수

* **push(element)** :  원소 추가
* **pop()** : top의 원소를 삭제
* **top()** : top에 있는 원소를 반환
* **empty()** : 비어있으면 true 아니면 false를 반환
* **size()** : 우선순위 큐에 포함되어 있는 원소들의 수를 반환

## ✍응용 형태
* 오름차순 정렬하도록 설정 (기본 정렬은 내림차순)
 
```cpp
class compare
{
    public:
    bool operator()(pair<int, int> v1, pair<int, int> v2)
    {
        if(v1.first == v2.first) // first값이 같다면..
        { 
            return v1.second < v2.second; //second 값 비교
        }
        else
        {
            return v1.first < v2.first; // v1이 더 작다면 true 반환 (오름차순)
        }
    }
}
// 내림차순은 부등호를 반대로 설계
priority_queue< pair<int, int>, vector< pair<int, int> >, compare> pq;

// 일반적인 오름차순 사용법
priority_queue< pair<int, int>, vector< pair<int, int> >, greater<pair<int, int> >
```
* 위의 방법으로 오름차순과 내림차순 그리고 사용자 설정 정렬 방법을 구현할 수 있다.
  
::: tip 추가로, sort는 기본적으로 오름차순이며

● sort(v.begin(), v.end()), greater<자료형>()); -> 내림차순이고

● sort(v.begin(), v.end()), less<자료형>()); -> 오름차순 이다.

우선순위 큐와 sort는 greater사용 시 반대라는 것을 기억해두자
:::


***
_**Last-Modified Date 2020-08-10**_
***
