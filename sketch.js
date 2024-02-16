{
  var place = 0;
  var jogador = 1;
  var sc, bt, bp, bs;
  var bg = "#c0ede3";
  var cont1, cont2;
  var jog, jog1Img, jog2Img;

  var j1 = "#97B5FC";
  var j2 = "#F6BA5F";
  var t = "#318371";

  var aa = 0,
    bb = 0,
    cc = 0,
    dd = 0,
    ee = 0,
    ff = 0,
    gg = 0,
    hh = 0,
    ii = 0;
  var ct, m, me, md, mc, mb, cd, ce, bd, be;

  var a, b, c, d, e, f, g, h, i;
  var a1, a2, a3, a4, a5, a6, a7, a8, a9;
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  var c1, c2, c3, c4, c5, c6, c7, c8, c9;
  var d1, d2, d3, d4, d5, d6, d7, d8, d9;
  var e1, e2, e3, e4, e5, e6, e7, e8, e9;
  var f1, f2, f3, f4, f5, f6, f7, f8, f9;
  var g1, g2, g3, g4, g5, g6, g7, g8, g9;
  var h1, h2, h3, h4, h5, h6, h7, h8, h9;
  var i1, i2, i3, i4, i5, i6, i7, i8, i9;
} //variaveis

function preload() {
  jog1Img = loadImage("images/x.png");
  jog2Img = loadImage("images/o.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (width >= height) {
    sc = height;
    cont1 = createSprite(0, height / 2, width / 50, height);
    cont2 = createSprite(width, height / 2, width / 50, height);
  } else {
    sc = width;
    cont1 = createSprite(width / 2, 0, width, height / 50);
    cont2 = createSprite(width / 2, height, width, height / 50);
  }

  bt = sc / 7;
  bp = sc / 80;
  bs = sc / 160;

  {
    {
      ct = createSprite(width / 2, height / 2, sc - bt - 2, sc - bt - 2);
      ct.shapeColor = 0;

      m = createSprite(
        width / 2,
        height / 2,
        (sc - bt) / 3 - bp,
        (sc - bt) / 3 - bp
      ); //meio
      m.shapeColor = bg;

      me = createSprite(
        width / 2 - (sc - bt) / 3 - bp / 2,
        height / 2,
        (sc - bt) / 3 - bp,
        (sc - bt) / 3 - bp
      ); //meio-esquerdo
      me.shapeColor = bg;

      md = createSprite(
        width / 2 + (sc - bt) / 3 + bp / 2,
        height / 2,
        (sc - bt) / 3 - bp,
        (sc - bt) / 3 - bp
      ); //meio-direito
      md.shapeColor = bg;

      mc = createSprite(
        width / 2,
        height / 2 - (sc - bt) / 3 - bp / 2,
        (sc - bt) / 3 - bp,
        (sc - bt) / 3 - bp
      ); //meio-cima
      mc.shapeColor = bg;

      mb = createSprite(
        width / 2,
        height / 2 + (sc - bt) / 3 + bp / 2,
        (sc - bt) / 3 - bp,
        (sc - bt) / 3 - bp
      ); //meio-baixo
      mb.shapeColor = bg;

      ce = createSprite(
        width / 2 - (sc - bt) / 3 - bp / 2,
        height / 2 - (sc - bt) / 3 - bp / 2,
        (sc - bt) / 3 - bp,
        (sc - bt) / 3 - bp
      ); //cima-esquerda
      ce.shapeColor = bg;

      cd = createSprite(
        width / 2 + (sc - bt) / 3 + bp / 2,
        height / 2 - (sc - bt) / 3 - bp / 2,
        (sc - bt) / 3 - bp,
        (sc - bt) / 3 - bp
      ); //cima-direita
      cd.shapeColor = bg;

      be = createSprite(
        width / 2 - (sc - bt) / 3 - bp / 2,
        height / 2 + (sc - bt) / 3 + bp / 2,
        (sc - bt) / 3 - bp,
        (sc - bt) / 3 - bp
      ); //baixo-esquerdo
      be.shapeColor = bg;

      bd = createSprite(
        width / 2 + (sc - bt) / 3 + bp / 2,
        height / 2 + (sc - bt) / 3 + bp / 2,
        (sc - bt) / 3 - bp,
        (sc - bt) / 3 - bp
      ); //baixo-direito
      bd.shapeColor = bg;
    } //jogo principal
    {
      {
        a = createSprite(
          width / 2 - (sc - bt) / 3 - bp / 2,
          height / 2 - (sc - bt) / 3 - bp / 2,
          (sc - bt) / 3 - 3 * bp,
          (sc - bt) / 3 - 3 * bp
        ); //cima-esquerda
        a.shapeColor = 0;

        b = createSprite(
          width / 2,
          height / 2 - (sc - bt) / 3 - bp / 2,
          (sc - bt) / 3 - 3 * bp,
          (sc - bt) / 3 - 3 * bp
        ); //meio-cima
        b.shapeColor = 0;

        c = createSprite(
          width / 2 + (sc - bt) / 3 + bp / 2,
          height / 2 - (sc - bt) / 3 - bp / 2,
          (sc - bt) / 3 - 3 * bp,
          (sc - bt) / 3 - 3 * bp
        ); //cima-direita
        c.shapeColor = 0;

        d = createSprite(
          width / 2 - (sc - bt) / 3 - bp / 2,
          height / 2,
          (sc - bt) / 3 - 3 * bp,
          (sc - bt) / 3 - 3 * bp
        ); //meio-esquerdo
        d.shapeColor = 0;

        e = createSprite(
          width / 2,
          height / 2,
          (sc - bt) / 3 - 3 * bp,
          (sc - bt) / 3 - 3 * bp
        ); //meio
        e.shapeColor = 0;

        f = createSprite(
          width / 2 + (sc - bt) / 3 + bp / 2,
          height / 2,
          (sc - bt) / 3 - 3 * bp,
          (sc - bt) / 3 - 3 * bp
        ); //meio-direito
        f.shapeColor = 0;

        g = createSprite(
          width / 2 - (sc - bt) / 3 - bp / 2,
          height / 2 + (sc - bt) / 3 + bp / 2,
          (sc - bt) / 3 - 3 * bp,
          (sc - bt) / 3 - 3 * bp
        ); //baixo-esquerdo
        g.shapeColor = 0;

        h = createSprite(
          width / 2,
          height / 2 + (sc - bt) / 3 + bp / 2,
          (sc - bt) / 3 - 3 * bp,
          (sc - bt) / 3 - 3 * bp
        ); //meio-baixo
        h.shapeColor = 0;

        i = createSprite(
          width / 2 + (sc - bt) / 3 + bp / 2,
          height / 2 + (sc - bt) / 3 + bp / 2,
          (sc - bt) / 3 - 3 * bp,
          (sc - bt) / 3 - 3 * bp
        ); //baixo-direito
        i.shapeColor = 0;
      } //principais

      {
        {
          a1 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          a1.shapeColor = bg;
          a1z = "ok";

          a2 = createSprite(
            width / 2 - (sc - bt) / 3 - bp / 2,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          a2.shapeColor = bg;
          a2z = "ok";

          a3 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          a3.shapeColor = bg;
          a3z = "ok";

          a4 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 - (sc - bt) / 3 - bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          a4.shapeColor = bg;
          a4z = "ok";

          a5 = createSprite(
            width / 2 - (sc - bt) / 3 - bp / 2,
            height / 2 - (sc - bt) / 3 - bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          a5.shapeColor = bg;
          a5z = "ok";

          a6 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 - (sc - bt) / 3 - bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          a6.shapeColor = bg;
          a6z = "ok";

          a7 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          a7.shapeColor = bg;
          a7z = "ok";

          a8 = createSprite(
            width / 2 - (sc - bt) / 3 - bp / 2,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          a8.shapeColor = bg;
          a8z = "ok";

          a9 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          a9.shapeColor = bg;
          a9z = "ok";
        } //a

        {
          b1 = createSprite(
            width / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          b1.shapeColor = bg;
          b1z = "ok";

          b2 = createSprite(
            width / 2,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          b2.shapeColor = bg;
          b2z = "ok";

          b3 = createSprite(
            width / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          b3.shapeColor = bg;
          b3z = "ok";

          b4 = createSprite(
            width / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            height / 2 - (sc - bt) / 3 - bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          b4.shapeColor = bg;
          b4z = "ok";

          b5 = createSprite(
            width / 2,
            height / 2 - (sc - bt) / 3 - bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          b5.shapeColor = bg;
          b5z = "ok";

          b6 = createSprite(
            width / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            height / 2 - (sc - bt) / 3 - bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          b6.shapeColor = bg;
          b6z = "ok";

          b7 = createSprite(
            width / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          b7.shapeColor = bg;
          b7z = "ok";

          b8 = createSprite(
            width / 2,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          b8.shapeColor = bg;
          b8z = "ok";

          b9 = createSprite(
            width / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          b9.shapeColor = bg;
          b9z = "ok";
        } //b

        {
          c1 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          c1.shapeColor = bg;
          c1z = "ok";

          c2 = createSprite(
            width / 2 + (sc - bt) / 3 + bp / 2,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          c2.shapeColor = bg;
          c2z = "ok";

          c3 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          c3.shapeColor = bg;
          c3z = "ok";

          c4 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 - (sc - bt) / 3 - bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          c4.shapeColor = bg;
          c4z = "ok";

          c5 = createSprite(
            width / 2 + (sc - bt) / 3 + bp / 2,
            height / 2 - (sc - bt) / 3 - bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          c5.shapeColor = bg;
          c5z = "ok";

          c6 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 - (sc - bt) / 3 - bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          c6.shapeColor = bg;
          c6z = "ok";

          c7 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          c7.shapeColor = bg;
          c7z = "ok";

          c8 = createSprite(
            width / 2 + (sc - bt) / 3 + bp / 2,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          c8.shapeColor = bg;
          c8z = "ok";

          c9 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          c9.shapeColor = bg;
          c9z = "ok";
        } //c

        {
          d1 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          d1.shapeColor = bg;
          d1z = "ok";

          d2 = createSprite(
            width / 2 - (sc - bt) / 3 - bp / 2,
            height / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          d2.shapeColor = bg;
          d2z = "ok";

          d3 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          d3.shapeColor = bg;
          d3z = "ok";

          d4 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          d4.shapeColor = bg;
          d4z = "ok";

          d5 = createSprite(
            width / 2 - (sc - bt) / 3 - bp / 2,
            height / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          d5.shapeColor = bg;
          d5z = "ok";

          d6 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          d6.shapeColor = bg;
          d6z = "ok";

          d7 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          d7.shapeColor = bg;
          d7z = "ok";

          d8 = createSprite(
            width / 2 - (sc - bt) / 3 - bp / 2,
            height / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          d8.shapeColor = bg;
          d8z = "ok";

          d9 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          d9.shapeColor = bg;
          d9z = "ok";
        } //d

        {
          e1 = createSprite(
            width / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            height / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          e1.shapeColor = bg;
          e1z = "ok";

          e2 = createSprite(
            width / 2,
            height / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          e2.shapeColor = bg;
          e2z = "ok";

          e3 = createSprite(
            width / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            height / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          e3.shapeColor = bg;
          e3z = "ok";

          e4 = createSprite(
            width / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            height / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          e4.shapeColor = bg;
          e4z = "ok";

          e5 = createSprite(
            width / 2,
            height / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          e5.shapeColor = bg;
          e5z = "ok";

          e6 = createSprite(
            width / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            height / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          e6.shapeColor = bg;
          e6z = "ok";

          e7 = createSprite(
            width / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            height / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          e7.shapeColor = bg;
          e7z = "ok";

          e8 = createSprite(
            width / 2,
            height / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          e8.shapeColor = bg;
          e8z = "ok";

          e9 = createSprite(
            width / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            height / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          e9.shapeColor = bg;
          e9z = "ok";
        } //e

        {
          f1 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          f1.shapeColor = bg;
          f1z = "ok";

          f2 = createSprite(
            width / 2 + (sc - bt) / 3 + bp / 2,
            height / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          f2.shapeColor = bg;
          f2z = "ok";

          f3 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          f3.shapeColor = bg;
          f3z = "ok";

          f4 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          f4.shapeColor = bg;
          f4z = "ok";

          f5 = createSprite(
            width / 2 + (sc - bt) / 3 + bp / 2,
            height / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          f5.shapeColor = bg;
          f5z = "ok";

          f6 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          f6.shapeColor = bg;
          f6z = "ok";

          f7 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          f7.shapeColor = bg;
          f7z = "ok";

          f8 = createSprite(
            width / 2 + (sc - bt) / 3 + bp / 2,
            height / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          f8.shapeColor = bg;
          f8z = "ok";

          f9 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          f9.shapeColor = bg;
          f9z = "ok";
        } //f

        {
          g1 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          g1.shapeColor = bg;
          g1z = "ok";

          g2 = createSprite(
            width / 2 - (sc - bt) / 3 - bp / 2,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          g2.shapeColor = bg;
          g2z = "ok";

          g3 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          g3.shapeColor = bg;
          g3z = "ok";

          g4 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 + (sc - bt) / 3 + bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          g4.shapeColor = bg;
          g4z = "ok";

          g5 = createSprite(
            width / 2 - (sc - bt) / 3 - bp / 2,
            height / 2 + (sc - bt) / 3 + bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          g5.shapeColor = bg;
          g5z = "ok";

          g6 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 + (sc - bt) / 3 + bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          g6.shapeColor = bg;
          g6z = "ok";

          g7 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          g7.shapeColor = bg;
          g7z = "ok";

          g8 = createSprite(
            width / 2 - (sc - bt) / 3 - bp / 2,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          g8.shapeColor = bg;
          g8z = "ok";

          g9 = createSprite(
            width / 2 -
              (sc - bt) / 3 -
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          g9.shapeColor = bg;
          g9z = "ok";
        } //g

        {
          h1 = createSprite(
            width / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          h1.shapeColor = bg;
          h1z = "ok";

          h2 = createSprite(
            width / 2,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          h2.shapeColor = bg;
          h2z = "ok";

          h3 = createSprite(
            width / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          h3.shapeColor = bg;
          h3z = "ok";

          h4 = createSprite(
            width / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            height / 2 + (sc - bt) / 3 + bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          h4.shapeColor = bg;
          h4z = "ok";

          h5 = createSprite(
            width / 2,
            height / 2 + (sc - bt) / 3 + bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          h5.shapeColor = bg;
          h5z = "ok";

          h6 = createSprite(
            width / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            height / 2 + (sc - bt) / 3 + bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          h6.shapeColor = bg;
          h6z = "ok";

          h7 = createSprite(
            width / 2 - ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          h7.shapeColor = bg;
          h7z = "ok";

          h8 = createSprite(
            width / 2,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          h8.shapeColor = bg;
          h8z = "ok";

          h9 = createSprite(
            width / 2 + ((sc - bt) / 3 - 3 * bp) / 3 + bs,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          h9.shapeColor = bg;
          h9z = "ok";
        } //h

        {
          i1 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          i1.shapeColor = bg;
          i1z = "ok";

          i2 = createSprite(
            width / 2 + (sc - bt) / 3 + bp / 2,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          i2.shapeColor = bg;
          i2z = "ok";

          i3 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          i3.shapeColor = bg;
          i3z = "ok";

          i4 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 + (sc - bt) / 3 + bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          i4.shapeColor = bg;
          i4z = "ok";

          i5 = createSprite(
            width / 2 + (sc - bt) / 3 + bp / 2,
            height / 2 + (sc - bt) / 3 + bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          i5.shapeColor = bg;
          i5z = "ok";

          i6 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 + (sc - bt) / 3 + bp / 2,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          i6.shapeColor = bg;
          i6z = "ok";

          i7 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 -
              ((sc - bt) / 3 - 3 * bp) / 3 -
              bs,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          i7.shapeColor = bg;
          i7z = "ok";

          i8 = createSprite(
            width / 2 + (sc - bt) / 3 + bp / 2,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          i8.shapeColor = bg;
          i8z = "ok";

          i9 = createSprite(
            width / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            height / 2 +
              (sc - bt) / 3 +
              bp / 2 +
              ((sc - bt) / 3 - 3 * bp) / 3 +
              bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs,
            ((sc - bt) / 3 - 3 * bp) / 3 - bs
          );
          i9.shapeColor = bg;
          i9z = "ok";
        } //i
      } //secundarios
    } //jogos secundrios
  } //jogos
} //setup

function draw() {
  background(bg);

  if (jogador == 1) {
    cont1.shapeColor = j1;
    cont2.shapeColor = j1;
  } else {
    cont1.shapeColor = j2;
    cont2.shapeColor = j2;
  }

  {
    if (sc <= 500) {
      textSize((sc - bt) / 20);
    } else {
      textSize(20);
    }

    fill("#19715B");
    textFont("inconsolata");
    textAlign(CENTER, CENTER);
    text(
      "Encoded by @hebertluisoficial | Oct, 2023",
      width / 2,
      height - height / 35
    );
  } //@hebertluisoficial

  jogar();
  pontuar();
  vencer();
  drawSprites();
} //draw

function jogar() {
  {
    if (place == 0) {
      ct.shapeColor = t;
    } else {
      ct.shapeColor = 0;
    }

    if (place == 1) {
      a.shapeColor = t;
    } else {
      if (aa == 0) {
        a.shapeColor = 0;
      }
    }

    if (place == 2) {
      b.shapeColor = t;
    } else {
      if (bb == 0) {
        b.shapeColor = 0;
      }
    }

    if (place == 3) {
      c.shapeColor = t;
    } else {
      if (cc == 0) {
        c.shapeColor = 0;
      }
    }

    if (place == 4) {
      d.shapeColor = t;
    } else {
      if (dd == 0) {
        d.shapeColor = 0;
      }
    }

    if (place == 5) {
      e.shapeColor = t;
    } else {
      if (ee == 0) {
        e.shapeColor = 0;
      }
    }

    if (place == 6) {
      f.shapeColor = t;
    } else {
      if (ff == 0) {
        f.shapeColor = 0;
      }
    }

    if (place == 7) {
      g.shapeColor = t;
    } else {
      if (gg == 0) {
        g.shapeColor = 0;
      }
    }

    if (place == 8) {
      h.shapeColor = t;
    } else {
      if (hh == 0) {
        h.shapeColor = 0;
      }
    }

    if (place == 9) {
      i.shapeColor = t;
    } else {
      if (ii == 0) {
        i.shapeColor = 0;
      }
    }
  } //onde jogar

  if (place == 1 || place == 0) {
    if (aa == 0) {
      if (mouseIsOver(a1) && a1z == "ok") {
        if (jogador == 1) {
          marcarX(a1.x, a1.y);
          jogador = 2;
          a1z = 1;
        } else {
          marcarO(a1.x, a1.y);
          jogador = 1;
          a1z = 2;
        }
        place = 1;
      }

      if (mouseIsOver(a2) && a2z == "ok") {
        if (jogador == 1) {
          marcarX(a2.x, a2.y);
          jogador = 2;
          a2z = 1;
        } else {
          marcarO(a2.x, a2.y);
          jogador = 1;
          a2z = 2;
        }
        place = 2;
      }

      if (mouseIsOver(a3) && a3z == "ok") {
        if (jogador == 1) {
          marcarX(a3.x, a3.y);
          jogador = 2;
          a3z = 1;
        } else {
          marcarO(a3.x, a3.y);
          jogador = 1;
          a3z = 2;
        }
        place = 3;
      }

      if (mouseIsOver(a4) && a4z == "ok") {
        if (jogador == 1) {
          marcarX(a4.x, a4.y);
          jogador = 2;
          a4z = 1;
        } else {
          marcarO(a4.x, a4.y);
          jogador = 1;
          a4z = 2;
        }
        place = 4;
      }

      if (mouseIsOver(a5) && a5z == "ok") {
        if (jogador == 1) {
          marcarX(a5.x, a5.y);
          jogador = 2;
          a5z = 1;
        } else {
          marcarO(a5.x, a5.y);
          jogador = 1;
          a5z = 2;
        }
        place = 5;
      }

      if (mouseIsOver(a6) && a6z == "ok") {
        if (jogador == 1) {
          marcarX(a6.x, a6.y);
          jogador = 2;
          a6z = 1;
        } else {
          marcarO(a6.x, a6.y);
          jogador = 1;
          a6z = 2;
        }
        place = 6;
      }

      if (mouseIsOver(a7) && a7z == "ok") {
        if (jogador == 1) {
          marcarX(a7.x, a7.y);
          jogador = 2;
          a7z = 1;
        } else {
          marcarO(a7.x, a7.y);
          jogador = 1;
          a7z = 2;
        }
        place = 7;
      }

      if (mouseIsOver(a8) && a8z == "ok") {
        if (jogador == 1) {
          marcarX(a8.x, a8.y);
          jogador = 2;
          a8z = 1;
        } else {
          marcarO(a8.x, a8.y);
          jogador = 1;
          a8z = 2;
        }
        place = 8;
      }

      if (mouseIsOver(a9) && a9z == "ok") {
        if (jogador == 1) {
          marcarX(a9.x, a9.y);
          jogador = 2;
          a9z = 1;
        } else {
          marcarO(a9.x, a9.y);
          jogador = 1;
          a9z = 2;
        }
        place = 9;
      }
    } else {
      place = 0;
    }
  } //jogar no A

  if (place == 2 || place == 0) {
    if (bb == 0) {
      if (mouseIsOver(b1) && b1z == "ok") {
        if (jogador == 1) {
          marcarX(b1.x, b1.y);
          jogador = 2;
          b1z = 1;
        } else {
          marcarO(b1.x, b1.y);
          jogador = 1;
          b1z = 2;
        }
        place = 1;
      }

      if (mouseIsOver(b2) && b2z == "ok") {
        if (jogador == 1) {
          marcarX(b2.x, b2.y);
          jogador = 2;
          b2z = 1;
        } else {
          marcarO(b2.x, b2.y);
          jogador = 1;
          b2z = 2;
        }
        place = 2;
      }

      if (mouseIsOver(b3) && b3z == "ok") {
        if (jogador == 1) {
          marcarX(b3.x, b3.y);
          jogador = 2;
          b3z = 1;
        } else {
          marcarO(b3.x, b3.y);
          jogador = 1;
          b3z = 2;
        }
        place = 3;
      }

      if (mouseIsOver(b4) && b4z == "ok") {
        if (jogador == 1) {
          marcarX(b4.x, b4.y);
          jogador = 2;
          b4z = 1;
        } else {
          marcarO(b4.x, b4.y);
          jogador = 1;
          b4z = 2;
        }
        place = 4;
      }

      if (mouseIsOver(b5) && b5z == "ok") {
        if (jogador == 1) {
          marcarX(b5.x, b5.y);
          jogador = 2;
          b5z = 1;
        } else {
          marcarO(b5.x, b5.y);
          jogador = 1;
          b5z = 2;
        }
        place = 5;
      }

      if (mouseIsOver(b6) && b6z == "ok") {
        if (jogador == 1) {
          marcarX(b6.x, b6.y);
          jogador = 2;
          b6z = 1;
        } else {
          marcarO(b6.x, b6.y);
          jogador = 1;
          b6z = 2;
        }
        place = 6;
      }

      if (mouseIsOver(b7) && b7z == "ok") {
        if (jogador == 1) {
          marcarX(b7.x, b7.y);
          jogador = 2;
          b7z = 1;
        } else {
          marcarO(b7.x, b7.y);
          jogador = 1;
          b7z = 2;
        }
        place = 7;
      }

      if (mouseIsOver(b8) && b8z == "ok") {
        if (jogador == 1) {
          marcarX(b8.x, b8.y);
          jogador = 2;
          b8z = 1;
        } else {
          marcarO(b8.x, b8.y);
          jogador = 1;
          b8z = 2;
        }
        place = 8;
      }

      if (mouseIsOver(b9) && b9z == "ok") {
        if (jogador == 1) {
          marcarX(b9.x, b9.y);
          jogador = 2;
          b9z = 1;
        } else {
          marcarO(b9.x, b9.y);
          jogador = 1;
          b9z = 2;
        }
        place = 9;
      }
    } else {
      place = 0;
    }
  } //jogar no B

  if (place == 3 || place == 0) {
    if (cc == 0) {
      if (mouseIsOver(c1) && c1z == "ok") {
        if (jogador == 1) {
          marcarX(c1.x, c1.y);
          jogador = 2;
          c1z = 1;
        } else {
          marcarO(c1.x, c1.y);
          jogador = 1;
          c1z = 2;
        }
        place = 1;
      }

      if (mouseIsOver(c2) && c2z == "ok") {
        if (jogador == 1) {
          marcarX(c2.x, c2.y);
          jogador = 2;
          c2z = 1;
        } else {
          marcarO(c2.x, c2.y);
          jogador = 1;
          c2z = 2;
        }
        place = 2;
      }

      if (mouseIsOver(c3) && c3z == "ok") {
        if (jogador == 1) {
          marcarX(c3.x, c3.y);
          jogador = 2;
          c3z = 1;
        } else {
          marcarO(c3.x, c3.y);
          jogador = 1;
          c3z = 2;
        }
        place = 3;
      }

      if (mouseIsOver(c4) && c4z == "ok") {
        if (jogador == 1) {
          marcarX(c4.x, c4.y);
          jogador = 2;
          c4z = 1;
        } else {
          marcarO(c4.x, c4.y);
          jogador = 1;
          c4z = 2;
        }
        place = 4;
      }

      if (mouseIsOver(c5) && c5z == "ok") {
        if (jogador == 1) {
          marcarX(c5.x, c5.y);
          jogador = 2;
          c5z = 1;
        } else {
          marcarO(c5.x, c5.y);
          jogador = 1;
          c5z = 2;
        }
        place = 5;
      }

      if (mouseIsOver(c6) && c6z == "ok") {
        if (jogador == 1) {
          marcarX(c6.x, c6.y);
          jogador = 2;
          c6z = 1;
        } else {
          marcarO(c6.x, c6.y);
          jogador = 1;
          c6z = 2;
        }
        place = 6;
      }

      if (mouseIsOver(c7) && c7z == "ok") {
        if (jogador == 1) {
          marcarX(c7.x, c7.y);
          jogador = 2;
          c7z = 1;
        } else {
          marcarO(c7.x, c7.y);
          jogador = 1;
          c7z = 2;
        }
        place = 7;
      }

      if (mouseIsOver(c8) && c8z == "ok") {
        if (jogador == 1) {
          marcarX(c8.x, c8.y);
          jogador = 2;
          c8z = 1;
        } else {
          marcarO(c8.x, c8.y);
          jogador = 1;
          c8z = 2;
        }
        place = 8;
      }

      if (mouseIsOver(c9) && c9z == "ok") {
        if (jogador == 1) {
          marcarX(c9.x, c9.y);
          jogador = 2;
          c9z = 1;
        } else {
          marcarO(c9.x, c9.y);
          jogador = 1;
          c9z = 2;
        }
        place = 9;
      }
    } else {
      place = 0;
    }
  } //jogar no C

  if (place == 4 || place == 0) {
    if (dd == 0) {
      if (mouseIsOver(d1) && d1z == "ok") {
        if (jogador == 1) {
          marcarX(d1.x, d1.y);
          jogador = 2;
          d1z = 1;
        } else {
          marcarO(d1.x, d1.y);
          jogador = 1;
          d1z = 2;
        }
        place = 1;
      }

      if (mouseIsOver(d2) && d2z == "ok") {
        if (jogador == 1) {
          marcarX(d2.x, d2.y);
          jogador = 2;
          d2z = 1;
        } else {
          marcarO(d2.x, d2.y);
          jogador = 1;
          d2z = 2;
        }
        place = 2;
      }

      if (mouseIsOver(d3) && d3z == "ok") {
        if (jogador == 1) {
          marcarX(d3.x, d3.y);
          jogador = 2;
          d3z = 1;
        } else {
          marcarO(d3.x, d3.y);
          jogador = 1;
          d3z = 2;
        }
        place = 3;
      }

      if (mouseIsOver(d4) && d4z == "ok") {
        if (jogador == 1) {
          marcarX(d4.x, d4.y);
          jogador = 2;
          d4z = 1;
        } else {
          marcarO(d4.x, d4.y);
          jogador = 1;
          d4z = 2;
        }
        place = 4;
      }

      if (mouseIsOver(d5) && d5z == "ok") {
        if (jogador == 1) {
          marcarX(d5.x, d5.y);
          jogador = 2;
          d5z = 1;
        } else {
          marcarO(d5.x, d5.y);
          jogador = 1;
          d5z = 2;
        }
        place = 5;
      }

      if (mouseIsOver(d6) && d6z == "ok") {
        if (jogador == 1) {
          marcarX(d6.x, d6.y);
          jogador = 2;
          d6z = 1;
        } else {
          marcarO(d6.x, d6.y);
          jogador = 1;
          d6z = 2;
        }
        place = 6;
      }

      if (mouseIsOver(d7) && d7z == "ok") {
        if (jogador == 1) {
          marcarX(d7.x, d7.y);
          jogador = 2;
          d7z = 1;
        } else {
          marcarO(d7.x, d7.y);
          jogador = 1;
          d7z = 2;
        }
        place = 7;
      }

      if (mouseIsOver(d8) && d8z == "ok") {
        if (jogador == 1) {
          marcarX(d8.x, d8.y);
          jogador = 2;
          d8z = 1;
        } else {
          marcarO(d8.x, d8.y);
          jogador = 1;
          d8z = 2;
        }
        place = 8;
      }

      if (mouseIsOver(d9) && d9z == "ok") {
        if (jogador == 1) {
          marcarX(d9.x, d9.y);
          jogador = 2;
          d9z = 1;
        } else {
          marcarO(d9.x, d9.y);
          jogador = 1;
          d9z = 2;
        }
        place = 9;
      }
    } else {
      place = 0;
    }
  } //jogar no D

  if (place == 5 || place == 0) {
    if (ee == 0) {
      if (mouseIsOver(e1) && e1z == "ok") {
        if (jogador == 1) {
          marcarX(e1.x, e1.y);
          jogador = 2;
          e1z = 1;
        } else {
          marcarO(e1.x, e1.y);
          jogador = 1;
          e1z = 2;
        }
        place = 1;
      }

      if (mouseIsOver(e2) && e2z == "ok") {
        if (jogador == 1) {
          marcarX(e2.x, e2.y);
          jogador = 2;
          e2z = 1;
        } else {
          marcarO(e2.x, e2.y);
          jogador = 1;
          e2z = 2;
        }
        place = 2;
      }

      if (mouseIsOver(e3) && e3z == "ok") {
        if (jogador == 1) {
          marcarX(e3.x, e3.y);
          jogador = 2;
          e3z = 1;
        } else {
          marcarO(e3.x, e3.y);
          jogador = 1;
          e3z = 2;
        }
        place = 3;
      }

      if (mouseIsOver(e4) && e4z == "ok") {
        if (jogador == 1) {
          marcarX(e4.x, e4.y);
          jogador = 2;
          e4z = 1;
        } else {
          marcarO(e4.x, e4.y);
          jogador = 1;
          e4z = 2;
        }
        place = 4;
      }

      if (mouseIsOver(e5) && e5z == "ok") {
        if (jogador == 1) {
          marcarX(e5.x, e5.y);
          jogador = 2;
          e5z = 1;
        } else {
          marcarO(e5.x, e5.y);
          jogador = 1;
          e5z = 2;
        }
        place = 5;
      }

      if (mouseIsOver(e6) && e6z == "ok") {
        if (jogador == 1) {
          marcarX(e6.x, e6.y);
          jogador = 2;
          e6z = 1;
        } else {
          marcarO(e6.x, e6.y);
          jogador = 1;
          e6z = 2;
        }
        place = 6;
      }

      if (mouseIsOver(e7) && e7z == "ok") {
        if (jogador == 1) {
          marcarX(e7.x, e7.y);
          jogador = 2;
          e7z = 1;
        } else {
          marcarO(e7.x, e7.y);
          jogador = 1;
          e7z = 2;
        }
        place = 7;
      }

      if (mouseIsOver(e8) && e8z == "ok") {
        if (jogador == 1) {
          marcarX(e8.x, e8.y);
          jogador = 2;
          e8z = 1;
        } else {
          marcarO(e8.x, e8.y);
          jogador = 1;
          e8z = 2;
        }
        place = 8;
      }

      if (mouseIsOver(e9) && e9z == "ok") {
        if (jogador == 1) {
          marcarX(e9.x, e9.y);
          jogador = 2;
          e9z = 1;
        } else {
          marcarO(e9.x, e9.y);
          jogador = 1;
          e9z = 2;
        }
        place = 9;
      }
    } else {
      place = 0;
    }
  } //jogar no E

  if (place == 6 || place == 0) {
    if (ff == 0) {
      if (mouseIsOver(f1) && f1z == "ok") {
        if (jogador == 1) {
          marcarX(f1.x, f1.y);
          jogador = 2;
          f1z = 1;
        } else {
          marcarO(f1.x, f1.y);
          jogador = 1;
          f1z = 2;
        }
        place = 1;
      }

      if (mouseIsOver(f2) && f2z == "ok") {
        if (jogador == 1) {
          marcarX(f2.x, f2.y);
          jogador = 2;
          f2z = 1;
        } else {
          marcarO(f2.x, f2.y);
          jogador = 1;
          f2z = 2;
        }
        place = 2;
      }

      if (mouseIsOver(f3) && f3z == "ok") {
        if (jogador == 1) {
          marcarX(f3.x, f3.y);
          jogador = 2;
          f3z = 1;
        } else {
          marcarO(f3.x, f3.y);
          jogador = 1;
          f3z = 2;
        }
        place = 3;
      }

      if (mouseIsOver(f4) && f4z == "ok") {
        if (jogador == 1) {
          marcarX(f4.x, f4.y);
          jogador = 2;
          f4z = 1;
        } else {
          marcarO(f4.x, f4.y);
          jogador = 1;
          f4z = 2;
        }
        place = 4;
      }

      if (mouseIsOver(f5) && f5z == "ok") {
        if (jogador == 1) {
          marcarX(f5.x, f5.y);
          jogador = 2;
          f5z = 1;
        } else {
          marcarO(f5.x, f5.y);
          jogador = 1;
          f5z = 2;
        }
        place = 5;
      }

      if (mouseIsOver(f6) && f6z == "ok") {
        if (jogador == 1) {
          marcarX(f6.x, f6.y);
          jogador = 2;
          f6z = 1;
        } else {
          marcarO(f6.x, f6.y);
          jogador = 1;
          f6z = 2;
        }
        place = 6;
      }

      if (mouseIsOver(f7) && f7z == "ok") {
        if (jogador == 1) {
          marcarX(f7.x, f7.y);
          jogador = 2;
          f7z = 1;
        } else {
          marcarO(f7.x, f7.y);
          jogador = 1;
          f7z = 2;
        }
        place = 7;
      }

      if (mouseIsOver(f8) && f8z == "ok") {
        if (jogador == 1) {
          marcarX(f8.x, f8.y);
          jogador = 2;
          f8z = 1;
        } else {
          marcarO(f8.x, f8.y);
          jogador = 1;
          f8z = 2;
        }
        place = 8;
      }

      if (mouseIsOver(f9) && f9z == "ok") {
        if (jogador == 1) {
          marcarX(f9.x, f9.y);
          jogador = 2;
          f9z = 1;
        } else {
          marcarO(f9.x, f9.y);
          jogador = 1;
          f9z = 2;
        }
        place = 9;
      }
    } else {
      place = 0;
    }
  } //jogar no F

  if (place == 7 || place == 0) {
    if (gg == 0) {
      if (mouseIsOver(g1) && g1z == "ok") {
        if (jogador == 1) {
          marcarX(g1.x, g1.y);
          jogador = 2;
          g1z = 1;
        } else {
          marcarO(g1.x, g1.y);
          jogador = 1;
          g1z = 2;
        }
        place = 1;
      }

      if (mouseIsOver(g2) && g2z == "ok") {
        if (jogador == 1) {
          marcarX(g2.x, g2.y);
          jogador = 2;
          g2z = 1;
        } else {
          marcarO(g2.x, g2.y);
          jogador = 1;
          g2z = 2;
        }
        place = 2;
      }

      if (mouseIsOver(g3) && g3z == "ok") {
        if (jogador == 1) {
          marcarX(g3.x, g3.y);
          jogador = 2;
          g3z = 1;
        } else {
          marcarO(g3.x, g3.y);
          jogador = 1;
          g3z = 2;
        }
        place = 3;
      }

      if (mouseIsOver(g4) && g4z == "ok") {
        if (jogador == 1) {
          marcarX(g4.x, g4.y);
          jogador = 2;
          g4z = 1;
        } else {
          marcarO(g4.x, g4.y);
          jogador = 1;
          g4z = 2;
        }
        place = 4;
      }

      if (mouseIsOver(g5) && g5z == "ok") {
        if (jogador == 1) {
          marcarX(g5.x, g5.y);
          jogador = 2;
          g5z = 1;
        } else {
          marcarO(g5.x, g5.y);
          jogador = 1;
          g5z = 2;
        }
        place = 5;
      }

      if (mouseIsOver(g6) && g6z == "ok") {
        if (jogador == 1) {
          marcarX(g6.x, g6.y);
          jogador = 2;
          g6z = 1;
        } else {
          marcarO(g6.x, g6.y);
          jogador = 1;
          g6z = 2;
        }
        place = 6;
      }

      if (mouseIsOver(g7) && g7z == "ok") {
        if (jogador == 1) {
          marcarX(g7.x, g7.y);
          jogador = 2;
          g7z = 1;
        } else {
          marcarO(g7.x, g7.y);
          jogador = 1;
          g7z = 2;
        }
        place = 7;
      }

      if (mouseIsOver(g8) && g8z == "ok") {
        if (jogador == 1) {
          marcarX(g8.x, g8.y);
          jogador = 2;
          g8z = 1;
        } else {
          marcarO(g8.x, g8.y);
          jogador = 1;
          g8z = 2;
        }
        place = 8;
      }

      if (mouseIsOver(g9) && g9z == "ok") {
        if (jogador == 1) {
          marcarX(g9.x, g9.y);
          jogador = 2;
          g9z = 1;
        } else {
          marcarO(g9.x, g9.y);
          jogador = 1;
          gz9 = 2;
        }
        place = 9;
      }
    } else {
      place = 0;
    }
  } //jogar no G

  if (place == 8 || place == 0) {
    if (hh == 0) {
      if (mouseIsOver(h1) && h1z == "ok") {
        if (jogador == 1) {
          marcarX(h1.x, h1.y);
          jogador = 2;
          h1z = 1;
        } else {
          marcarO(h1.x, h1.y);
          jogador = 1;
          h1z = 2;
        }
        place = 1;
      }

      if (mouseIsOver(h2) && h2z == "ok") {
        if (jogador == 1) {
          marcarX(h2.x, h2.y);
          jogador = 2;
          h2z = 1;
        } else {
          marcarO(h2.x, h2.y);
          jogador = 1;
          h2z = 2;
        }
        place = 2;
      }

      if (mouseIsOver(h3) && h3z == "ok") {
        if (jogador == 1) {
          marcarX(h3.x, h3.y);
          jogador = 2;
          h3z = 1;
        } else {
          marcarO(h3.x, h3.y);
          jogador = 1;
          h3z = 2;
        }
        place = 3;
      }

      if (mouseIsOver(h4) && h4z == "ok") {
        if (jogador == 1) {
          marcarX(h4.x, h4.y);
          jogador = 2;
          h4z = 1;
        } else {
          marcarO(h4.x, h4.y);
          jogador = 1;
          h4z = 2;
        }
        place = 4;
      }

      if (mouseIsOver(h5) && h5z == "ok") {
        if (jogador == 1) {
          marcarX(h5.x, h5.y);
          jogador = 2;
          h5z = 1;
        } else {
          marcarO(h5.x, h5.y);
          jogador = 1;
          h5z = 2;
        }
        place = 5;
      }

      if (mouseIsOver(h6) && h6z == "ok") {
        if (jogador == 1) {
          marcarX(h6.x, h6.y);
          jogador = 2;
          h6z = 1;
        } else {
          marcarO(h6.x, h6.y);
          jogador = 1;
          h6z = 2;
        }
        place = 6;
      }

      if (mouseIsOver(h7) && h7z == "ok") {
        if (jogador == 1) {
          marcarX(h7.x, h7.y);
          jogador = 2;
          h7z = 1;
        } else {
          marcarO(h7.x, h7.y);
          jogador = 1;
          h7z = 2;
        }
        place = 7;
      }

      if (mouseIsOver(h8) && h8z == "ok") {
        if (jogador == 1) {
          marcarX(h8.x, h8.y);
          jogador = 2;
          h8z = 1;
        } else {
          marcarO(h8.x, h8.y);
          jogador = 1;
          h8z = 2;
        }
        place = 8;
      }

      if (mouseIsOver(h9) && h9z == "ok") {
        if (jogador == 1) {
          marcarX(h9.x, h9.y);
          jogador = 2;
          h9z = 1;
        } else {
          marcarO(h9.x, h9.y);
          jogador = 1;
          h9z = 2;
        }
        place = 9;
      }
    } else {
      place = 0;
    }
  } //jogar no H

  if (place == 9 || place == 0) {
    if (ii == 0) {
      if (mouseIsOver(i1) && i1z == "ok") {
        if (jogador == 1) {
          marcarX(i1.x, i1.y);
          jogador = 2;
          i1z = 1;
        } else {
          marcarO(i1.x, i1.y);
          jogador = 1;
          i1z = 2;
        }
        place = 1;
      }

      if (mouseIsOver(i2) && i2z == "ok") {
        if (jogador == 1) {
          marcarX(i2.x, i2.y);
          jogador = 2;
          i2z = 1;
        } else {
          marcarO(i2.x, i2.y);
          jogador = 1;
          i2z = 2;
        }
        place = 2;
      }

      if (mouseIsOver(i3) && i3z == "ok") {
        if (jogador == 1) {
          marcarX(i3.x, i3.y);
          jogador = 2;
          i3z = 1;
        } else {
          marcarO(i3.x, i3.y);
          jogador = 1;
          i3z = 2;
        }
        place = 3;
      }

      if (mouseIsOver(i4) && i4z == "ok") {
        if (jogador == 1) {
          marcarX(i4.x, i4.y);
          jogador = 2;
          i4z = 1;
        } else {
          marcarO(i4.x, i4.y);
          jogador = 1;
          i4z = 2;
        }
        place = 4;
      }

      if (mouseIsOver(i5) && i5z == "ok") {
        if (jogador == 1) {
          marcarX(i5.x, i5.y);
          jogador = 2;
          i5z = 1;
        } else {
          marcarO(i5.x, i5.y);
          jogador = 1;
          i5z = 2;
        }
        place = 5;
      }

      if (mouseIsOver(i6) && i6z == "ok") {
        if (jogador == 1) {
          marcarX(i6.x, i6.y);
          jogador = 2;
          i6z = 1;
        } else {
          marcarO(i6.x, i6.y);
          jogador = 1;
          i6z = 2;
        }
        place = 6;
      }

      if (mouseIsOver(i7) && i7z == "ok") {
        if (jogador == 1) {
          marcarX(i7.x, i7.y);
          jogador = 2;
          i7z = 1;
        } else {
          marcarO(i7.x, i7.y);
          jogador = 1;
          i7z = 2;
        }
        place = 7;
      }

      if (mouseIsOver(i8) && i8z == "ok") {
        if (jogador == 1) {
          marcarX(i8.x, i8.y);
          jogador = 2;
          i8z = 1;
        } else {
          marcarO(i8.x, i8.y);
          jogador = 1;
          i8z = 2;
        }
        place = 8;
      }

      if (mouseIsOver(i9) && i9z == "ok") {
        if (jogador == 1) {
          marcarX(i9.x, i9.y);
          jogador = 2;
          i9z = 1;
        } else {
          marcarO(i9.x, i9.y);
          jogador = 1;
          i9z = 2;
        }
        place = 9;
      }
    } else {
      place = 0;
    }
  } //jogar no I
} //jogar

function marcarX(x, y) {
  jog = createSprite(x, y);
  jog.addImage(jog1Img);
  jog.scale = sc / 10000;
} //sprite X

function marcarO(x, y) {
  jog = createSprite(x, y);
  jog.addImage(jog2Img);
  jog.scale = sc / 10000;
} //sprite O

function pontuar() {
  {
    if (
      (a1z == 1 && a2z == 1 && a3z == 1) ||
      (a4z == 1 && a5z == 1 && a6z == 1) ||
      (a7z == 1 && a8z == 1 && a9z == 1) ||
      (a1z == 1 && a4z == 1 && a7z == 1) ||
      (a2z == 1 && a5z == 1 && a8z == 1) ||
      (a3z == 1 && a6z == 1 && a9z == 1) ||
      (a1z == 1 && a5z == 1 && a9z == 1) ||
      (a3z == 1 && a5z == 1 && a7z == 1)
    ) {
      pontuarX(ce.x, ce.y);
      a.shapeColor = 0;
      aa = 1;
    }

    if (
      (a1z == 2 && a2z == 2 && a3z == 2) ||
      (a4z == 2 && a5z == 2 && a6z == 2) ||
      (a7z == 2 && a8z == 2 && a9z == 2) ||
      (a1z == 2 && a4z == 2 && a7z == 2) ||
      (a2z == 2 && a5z == 2 && a8z == 2) ||
      (a3z == 2 && a6z == 2 && a9z == 2) ||
      (a1z == 2 && a5z == 2 && a9z == 2) ||
      (a3z == 2 && a5z == 2 && a7z == 2)
    ) {
      pontuarO(ce.x, ce.y);
      a.shapeColor = 0;
      aa = 2;
    }

    if (
      a1z != "ok" &&
      a2z != "ok" &&
      a3z != "ok" &&
      a4z != "ok" &&
      a5z != "ok" &&
      a6z != "ok" &&
      a7z != "ok" &&
      a8z != "ok" &&
      a9z != "ok" &&
      aa == 0
    ) {
      if (jogador == 1) {
        pontuarX(ce.x, ce.y);
        aa = 1;
      } else {
        pontuarO(ce.x, ce.y);
        aa = 2;
      }
      a.shapeColor = 0;
    }
  } //pontuar no A

  {
    if (
      (b1z == 1 && b2z == 1 && b3z == 1) ||
      (b4z == 1 && b5z == 1 && b6z == 1) ||
      (b7z == 1 && b8z == 1 && b9z == 1) ||
      (b1z == 1 && b4z == 1 && b7z == 1) ||
      (b2z == 1 && b5z == 1 && b8z == 1) ||
      (b3z == 1 && b6z == 1 && b9z == 1) ||
      (b1z == 1 && b5z == 1 && b9z == 1) ||
      (b3z == 1 && b5z == 1 && b7z == 1)
    ) {
      pontuarX(mc.x, mc.y);
      b.shapeColor = 0;
      bb = 1;
    }

    if (
      (b1z == 2 && b2z == 2 && b3z == 2) ||
      (b4z == 2 && b5z == 2 && b6z == 2) ||
      (b7z == 2 && b8z == 2 && b9z == 2) ||
      (b1z == 2 && b4z == 2 && b7z == 2) ||
      (b2z == 2 && b5z == 2 && b8z == 2) ||
      (b3z == 2 && b6z == 2 && b9z == 2) ||
      (b1z == 2 && b5z == 2 && b9z == 2) ||
      (b3z == 2 && b5z == 2 && b7z == 2)
    ) {
      pontuarO(mc.x, mc.y);
      b.shapeColor = 0;
      bb = 2;
    }

    if (
      b1z != "ok" &&
      b2z != "ok" &&
      b3z != "ok" &&
      b4z != "ok" &&
      b5z != "ok" &&
      b6z != "ok" &&
      b7z != "ok" &&
      b8z != "ok" &&
      b9z != "ok" &&
      bb == 0
    ) {
      if (jogador == 1) {
        pontuarX(mc.x, mc.y);
        bb = 1;
      } else {
        pontuarO(mc.x, mc.y);
        bb = 2;
      }
      b.shapeColor = 0;
    }
  } //pontuar no B

  {
    if (
      (c1z == 1 && c2z == 1 && c3z == 1) ||
      (c4z == 1 && c5z == 1 && c6z == 1) ||
      (c7z == 1 && c8z == 1 && c9z == 1) ||
      (c1z == 1 && c4z == 1 && c7z == 1) ||
      (c2z == 1 && c5z == 1 && c8z == 1) ||
      (c3z == 1 && c6z == 1 && c9z == 1) ||
      (c1z == 1 && c5z == 1 && c9z == 1) ||
      (c3z == 1 && c5z == 1 && c7z == 1)
    ) {
      pontuarX(cd.x, cd.y);
      c.shapeColor = 0;
      cc = 1;
    }

    if (
      (c1z == 2 && c2z == 2 && c3z == 2) ||
      (c4z == 2 && c5z == 2 && c6z == 2) ||
      (c7z == 2 && c8z == 2 && c9z == 2) ||
      (c1z == 2 && c4z == 2 && c7z == 2) ||
      (c2z == 2 && c5z == 2 && c8z == 2) ||
      (c3z == 2 && c6z == 2 && c9z == 2) ||
      (c1z == 2 && c5z == 2 && c9z == 2) ||
      (c3z == 2 && c5z == 2 && c7z == 2)
    ) {
      pontuarO(cd.x, cd.y);
      c.shapeColor = 0;
      cc = 2;
    }

    if (
      c1z != "ok" &&
      c2z != "ok" &&
      c3z != "ok" &&
      c4z != "ok" &&
      c5z != "ok" &&
      c6z != "ok" &&
      c7z != "ok" &&
      c8z != "ok" &&
      c9z != "ok" &&
      cc == 0
    ) {
      if (jogador == 1) {
        pontuarX(cd.x, cd.y);
        cc = 1;
      } else {
        pontuarO(cd.x, cd.y);
        cc = 2;
      }
      c.shapeColor = 0;
    }
  } //pontuar no C

  {
    if (
      (d1z == 1 && d2z == 1 && d3z == 1) ||
      (d4z == 1 && d5z == 1 && d6z == 1) ||
      (d7z == 1 && d8z == 1 && d9z == 1) ||
      (d1z == 1 && d4z == 1 && d7z == 1) ||
      (d2z == 1 && d5z == 1 && d8z == 1) ||
      (d3z == 1 && d6z == 1 && d9z == 1) ||
      (d1z == 1 && d5z == 1 && d9z == 1) ||
      (d3z == 1 && d5z == 1 && d7z == 1)
    ) {
      pontuarX(me.x, me.y);
      d.shapeColor = 0;
      dd = 1;
    }

    if (
      (d1z == 2 && d2z == 2 && d3z == 2) ||
      (d4z == 2 && d5z == 2 && d6z == 2) ||
      (d7z == 2 && d8z == 2 && d9z == 2) ||
      (d1z == 2 && d4z == 2 && d7z == 2) ||
      (d2z == 2 && d5z == 2 && d8z == 2) ||
      (d3z == 2 && d6z == 2 && d9z == 2) ||
      (d1z == 2 && d5z == 2 && d9z == 2) ||
      (d3z == 2 && d5z == 2 && d7z == 2)
    ) {
      pontuarO(me.x, me.y);
      d.shapeColor = 0;
      dd = 2;
    }

    if (
      d1z != "ok" &&
      d2z != "ok" &&
      d3z != "ok" &&
      d4z != "ok" &&
      d5z != "ok" &&
      d6z != "ok" &&
      d7z != "ok" &&
      d8z != "ok" &&
      d9z != "ok" &&
      dd == 0
    ) {
      if (jogador == 1) {
        pontuarX(me.x, me.y);
        dd = 1;
      } else {
        pontuarO(me.x, me.y);
        dd = 2;
      }
      d.shapeColor = 0;
    }
  } //pontuar no D

  {
    if (
      (e1z == 1 && e2z == 1 && e3z == 1) ||
      (e4z == 1 && e5z == 1 && e6z == 1) ||
      (e7z == 1 && e8z == 1 && e9z == 1) ||
      (e1z == 1 && e4z == 1 && e7z == 1) ||
      (e2z == 1 && e5z == 1 && e8z == 1) ||
      (e3z == 1 && e6z == 1 && e9z == 1) ||
      (e1z == 1 && e5z == 1 && e9z == 1) ||
      (e3z == 1 && e5z == 1 && e7z == 1)
    ) {
      pontuarX(m.x, m.y);
      e.shapeColor = 0;
      ee = 1;
    }

    if (
      (e1z == 2 && e2z == 2 && e3z == 2) ||
      (e4z == 2 && e5z == 2 && e6z == 2) ||
      (e7z == 2 && e8z == 2 && e9z == 2) ||
      (e1z == 2 && e4z == 2 && e7z == 2) ||
      (e2z == 2 && e5z == 2 && e8z == 2) ||
      (e3z == 2 && e6z == 2 && e9z == 2) ||
      (e1z == 2 && e5z == 2 && e9z == 2) ||
      (e3z == 2 && e5z == 2 && e7z == 2)
    ) {
      pontuarO(m.x, m.y);
      e.shapeColor = 0;
      ee = 2;
    }

    if (
      e1z != "ok" &&
      e2z != "ok" &&
      e3z != "ok" &&
      e4z != "ok" &&
      e5z != "ok" &&
      e6z != "ok" &&
      e7z != "ok" &&
      e8z != "ok" &&
      e9z != "ok" &&
      ee == 0
    ) {
      if (jogador == 1) {
        pontuarX(m.x, m.y);
        ee = 1;
      } else {
        pontuarO(m.x, m.y);
        ee = 2;
      }
      e.shapeColor = 0;
    }
  } //pontuar no E

  {
    if (
      (f1z == 1 && f2z == 1 && f3z == 1) ||
      (f4z == 1 && f5z == 1 && f6z == 1) ||
      (f7z == 1 && f8z == 1 && f9z == 1) ||
      (f1z == 1 && f4z == 1 && f7z == 1) ||
      (f2z == 1 && f5z == 1 && f8z == 1) ||
      (f3z == 1 && f6z == 1 && f9z == 1) ||
      (f1z == 1 && f5z == 1 && f9z == 1) ||
      (f3z == 1 && f5z == 1 && f7z == 1)
    ) {
      pontuarX(md.x, md.y);
      f.shapeColor = 0;
      ff = 1;
    }

    if (
      (f1z == 2 && f2z == 2 && f3z == 2) ||
      (f4z == 2 && f5z == 2 && f6z == 2) ||
      (f7z == 2 && f8z == 2 && f9z == 2) ||
      (f1z == 2 && f4z == 2 && f7z == 2) ||
      (f2z == 2 && f5z == 2 && f8z == 2) ||
      (f3z == 2 && f6z == 2 && f9z == 2) ||
      (f1z == 2 && f5z == 2 && f9z == 2) ||
      (f3z == 2 && f5z == 2 && f7z == 2)
    ) {
      pontuarO(md.x, md.y);
      f.shapeColor = 0;
      ff = 2;
    }

    if (
      f1z != "ok" &&
      f2z != "ok" &&
      f3z != "ok" &&
      f4z != "ok" &&
      f5z != "ok" &&
      f6z != "ok" &&
      f7z != "ok" &&
      f8z != "ok" &&
      f9z != "ok" &&
      ff == 0
    ) {
      if (jogador == 1) {
        pontuarX(md.x, md.y);
        ff = 1;
      } else {
        pontuarO(md.x, md.y);
        ff = 2;
      }
      f.shapeColor = 0;
    }
  } //pontuar no F

  {
    if (
      (g1z == 1 && g2z == 1 && g3z == 1) ||
      (g4z == 1 && g5z == 1 && g6z == 1) ||
      (g7z == 1 && g8z == 1 && g9z == 1) ||
      (g1z == 1 && g4z == 1 && g7z == 1) ||
      (g2z == 1 && g5z == 1 && g8z == 1) ||
      (g3z == 1 && g6z == 1 && g9z == 1) ||
      (g1z == 1 && g5z == 1 && g9z == 1) ||
      (g3z == 1 && g5z == 1 && g7z == 1)
    ) {
      pontuarX(be.x, be.y);
      g.shapeColor = 0;
      gg = 1;
    }

    if (
      (g1z == 2 && g2z == 2 && g3z == 2) ||
      (g4z == 2 && g5z == 2 && g6z == 2) ||
      (g7z == 2 && g8z == 2 && g9z == 2) ||
      (g1z == 2 && g4z == 2 && g7z == 2) ||
      (g2z == 2 && g5z == 2 && g8z == 2) ||
      (g3z == 2 && g6z == 2 && g9z == 2) ||
      (g1z == 2 && g5z == 2 && g9z == 2) ||
      (g3z == 2 && g5z == 2 && g7z == 2)
    ) {
      pontuarO(be.x, be.y);
      g.shapeColor = 0;
      gg = 2;
    }

    if (
      g1z != "ok" &&
      g2z != "ok" &&
      g3z != "ok" &&
      g4z != "ok" &&
      g5z != "ok" &&
      g6z != "ok" &&
      g7z != "ok" &&
      g8z != "ok" &&
      g9z != "ok" &&
      gg == 0
    ) {
      if (jogador == 1) {
        pontuarX(be.x, be.y);
        gg = 1;
      } else {
        pontuarO(be.x, be.y);
        gg = 2;
      }
      g.shapeColor = 0;
    }
  } //pontuar no G

  {
    if (
      (h1z == 1 && h2z == 1 && h3z == 1) ||
      (h4z == 1 && h5z == 1 && h6z == 1) ||
      (h7z == 1 && h8z == 1 && h9z == 1) ||
      (h1z == 1 && h4z == 1 && h7z == 1) ||
      (h2z == 1 && h5z == 1 && h8z == 1) ||
      (h3z == 1 && h6z == 1 && h9z == 1) ||
      (h1z == 1 && h5z == 1 && h9z == 1) ||
      (h3z == 1 && h5z == 1 && h7z == 1)
    ) {
      pontuarX(mb.x, mb.y);
      h.shapeColor = 0;
      hh = 1;
    }

    if (
      (h1z == 2 && h2z == 2 && h3z == 2) ||
      (h4z == 2 && h5z == 2 && h6z == 2) ||
      (h7z == 2 && h8z == 2 && h9z == 2) ||
      (h1z == 2 && h4z == 2 && h7z == 2) ||
      (h2z == 2 && h5z == 2 && h8z == 2) ||
      (h3z == 2 && h6z == 2 && h9z == 2) ||
      (h1z == 2 && h5z == 2 && h9z == 2) ||
      (h3z == 2 && h5z == 2 && h7z == 2)
    ) {
      pontuarO(mb.x, mb.y);
      h.shapeColor = 0;
      hh = 2;
    }

    if (
      h1z != "ok" &&
      h2z != "ok" &&
      h3z != "ok" &&
      h4z != "ok" &&
      h5z != "ok" &&
      h6z != "ok" &&
      h7z != "ok" &&
      h8z != "ok" &&
      h9z != "ok" &&
      hh == 0
    ) {
      if (jogador == 1) {
        pontuarX(mb.x, mb.y);
        hh = 1;
      } else {
        pontuarO(mb.x, mb.y);
        hh = 2;
      }
      h.shapeColor = 0;
    }
  } //pontuar no H

  {
    if (
      (i1z == 1 && i2z == 1 && i3z == 1) ||
      (i4z == 1 && i5z == 1 && i6z == 1) ||
      (i7z == 1 && i8z == 1 && i9z == 1) ||
      (i1z == 1 && i4z == 1 && i7z == 1) ||
      (i2z == 1 && i5z == 1 && i8z == 1) ||
      (i3z == 1 && i6z == 1 && i9z == 1) ||
      (i1z == 1 && i5z == 1 && i9z == 1) ||
      (i3z == 1 && i5z == 1 && i7z == 1)
    ) {
      pontuarX(bd.x, bd.y);
      i.shapeColor = 0;
      ii = 1;
    }

    if (
      (i1z == 2 && i2z == 2 && i3z == 2) ||
      (i4z == 2 && i5z == 2 && i6z == 2) ||
      (i7z == 2 && i8z == 2 && i9z == 2) ||
      (i1z == 2 && i4z == 2 && i7z == 2) ||
      (i2z == 2 && i5z == 2 && i8z == 2) ||
      (i3z == 2 && i6z == 2 && i9z == 2) ||
      (i1z == 2 && i5z == 2 && i9z == 2) ||
      (i3z == 2 && i5z == 2 && i7z == 2)
    ) {
      pontuarO(bd.x, bd.y);
      i.shapeColor = 0;
      ii = 2;
    }

    if (
      i1z != "ok" &&
      i2z != "ok" &&
      i3z != "ok" &&
      i4z != "ok" &&
      i5z != "ok" &&
      i6z != "ok" &&
      i7z != "ok" &&
      i8z != "ok" &&
      i9z != "ok" &&
      ii == 0
    ) {
      if (jogador == 1) {
        pontuarX(bd.x, bd.y);
        ii = 1;
      } else {
        pontuarO(bd.x, bd.y);
        ii = 2;
      }
      i.shapeColor = 0;
    }
  } //pontuar no I
} //pontuar

function pontuarX(x, y) {
  jog = createSprite(x, y);
  jog.addImage(jog1Img);
  jog.scale = sc / 2000;
} //pontuar X

function pontuarO(x, y) {
  jog = createSprite(x, y);
  jog.addImage(jog2Img);
  jog.scale = sc / 2000;
} //pontuar O

function vencer() {
  if (
    (aa == 1 && bb == 1 && cc == 1) ||
    (dd == 1 && ee == 1 && ff == 1) ||
    (gg == 1 && hh == 1 && ii == 1) ||
    (aa == 1 && dd == 1 && gg == 1) ||
    (bb == 1 && ee == 1 && hh == 1) ||
    (cc == 1 && ff == 1 && ii == 1) ||
    (aa == 1 && ee == 1 && ii == 1) ||
    (cc == 1 && ee == 1 && gg == 1)
  ) {
    ct.shapeColor = j1;
    place = 10;
  }

  if (
    (aa == 2 && bb == 2 && cc == 2) ||
    (dd == 2 && ee == 2 && ff == 2) ||
    (gg == 2 && hh == 2 && ii == 2) ||
    (aa == 2 && dd == 2 && gg == 2) ||
    (bb == 2 && ee == 2 && hh == 2) ||
    (cc == 2 && ff == 2 && ii == 2) ||
    (aa == 2 && ee == 2 && ii == 2) ||
    (cc == 2 && ee == 2 && gg == 2)
  ) {
    ct.shapeColor = j2;
    place = 10;
  }

  if (
    aa != 0 &&
    bb != 0 &&
    cc != 0 &&
    dd != 0 &&
    ee != 0 &&
    ff != 0 &&
    gg != 0 &&
    hh != 0 &&
    ii != 0 &&
    place != 10
  ) {
    if (aa + bb + cc + dd + ee + ff + gg + hh + ii >= 14) {
      ct.shapeColor = j2;
      place = 11;
    } else {
      ct.shapeColor = j1;
      place = 11;
    }
  } //velha
} //vencer
