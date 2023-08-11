import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function CryptoEdgeAPIRoute(request: NextRequest) {
  return new Response(
    JSON.stringify({ code: 200, ...GetTranslateSentence() }),
    { headers: { 'Content-Type': 'application/json' } }
  );
};

function GetTranslateSentence(): any {
  return __TranslateSentence[Math.random() * 100] || __TranslateSentence[0];
};

var __TranslateSentence = [
  {
    context: '我们害怕死亡，害怕被扼杀，害怕被唾弃，我们不相信上帝，但我们是相信光明的。',
    source: 'bilibili|BV1Wh411H7qK',
  },{
    context: '我已经在现实中失去了活下去的自信，我们开始怀疑自己，我们从何时开始迷失方向？',
    source: 'bilibili|BV1Wh411H7qK',
  },{
    context: '这是一条通往成功，财富，金钱和理论正义的道路，已经出现变得模糊了，这到底是为什么？',
    source: 'bilibili|BV1Wh411H7qK',
  },{
    context: '信仰上帝不能救活现实，我们不能在获得金钱的道路上杀死了自己！',
    source: 'bilibili|BV1Wh411H7qK',
  },{
    context: '我相信在将来，不可靠的事物会消失，我们就会摆脱扭曲的依赖。',
    source: 'bilibili|BV1Wh411H7qK',
  },{
    context: '信仰上帝只是相信一个装在空壳子里的人，我们何时才能领略到它的危害？我们何时才能找到自己？',
    source: 'bilibili|BV1Wh411H7qK',
  },{
    context: '如果我们找不到所谓的真理，我们就会迷失一切，发病，发疯。',
    source: 'bilibili|BV1Wh411H7qK',
  },{
    context: '他们释放了人，却不知道有多少人在这场战争中牺牲，多少人向光明献出了生命。',
    source: 'bilibili|BV1Wh411H7qK',
  },{
    context: '这种吃人的人类，现在真是有很多呢。',
    source: 'bilibili|BV1Wh411H7qK',
  },{
    context: '中国人可能被欺骗，被摧残，被践踏和破坏，但绝不会灭亡！',
    source: 'bilibili|BV1Wh411H7qK',
  },{
    context: '化妆之后的脸是白的，而内心是腐烂的。',
    source: 'bilibili|BV1Wh411H7qK',
  },
]