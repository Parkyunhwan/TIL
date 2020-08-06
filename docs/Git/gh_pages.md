# GitHub Pages 사용하기

::: tip GitHub Pages란?

GitHub Pages 는 GitHub 에서 제공하는 Static 웹사이트 로 GitHub Repository 에 Push 만 하면 간단하게  웹사이트를 만들 수 있다. 다만 Static 웹사이트 이기 때문에 Database 등은 사용이 불가능하지만 AWS 없이도 무료로 내가 만든 웹사이트를 공유할 수 있는 유용한 도구이다.

:::

## Github-pages 추가해보기

일단 자신의 Repo를 clone 해온다.

```
git clone {repo URL}

git branch gh-pages

echo "Hello World" > index.html
git add -all
git commit -m "{커밋 메시지}"

```
위의 명령어를 이용해 **gh-pages** 브랜치를 생성해 index.html을 커밋한다.
<br>   
그 후 gh-pages 브랜치로 변경 내용을 푸쉬한다.
```
git push origin gh-pages
```

Push 후엔 Repository의 Setting 메뉴에서 GitHub pages 설정을 'gh-pages'로 바꿔 준다.

[[Github-pages]](https://pages.github.com/)

***
_**Date 2020-08-06**_
***
