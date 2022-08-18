const quotes = [
    {
        quote: "끝까지 가면 내가 다 이겨",
        author: "seungwon Ko",
    },
    {
        quote:"후회하지 말자",
        author:"seungwon Ko",
    },
    {
        quote:"나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다",
        author:"Ralph Waldo Emerson",
    },
    {
        quote:" 인생에서 가장 슬픈 세 가지. 할 수 있었는데, 해야 했는데, 해야만 했는데",
        author:"Louis E.boone",
    },
    {
        quote:"이 또한 지나가리라",
        author:"Lanta Wilson Smith",
    },
    {
        quote:"시작하기 전부터 성공을 예측하라. 먼저 성공할 것이라는 기대를 갖는 것이 중요하다",
        author:"Denis Waitley",
    },
    {
        quote:"삶에 한계란 없다. 스스로 만든 한계를 제외하고 말이지",
        author:"Les Brown",
    },
    {
        quote:"사람의 육체에는 한계가 있을 수 있지만, 사람의 정신에는 한계가 없다",
        author:"Dean Karnazes",
    },
    {
        quote:"자신을 믿어라. 우리는 스스로 생각하는 것보다 더 많은 것을 알고 있다.",
        author:"Benjamin Spock",
    },
    {
        quote:"七顚八起", 
        author:"四字成語",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
