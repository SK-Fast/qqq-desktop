document.addEventListener("DOMContentLoaded", function () {
  let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Composites = Matter.Composites;

  let engine = Engine.create();
  engine.world.gravity.y = 3;

  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: screenWidth,
      height: screenHeight,
      wireframes: false,
    },
  });

  let ground = Bodies.rectangle(400, screenHeight, screenWidth * 2, 60, {
    isStatic: true,
    render: {
      fillStyle: "rgba(225,225,225,0)",
    },
  });

  let ground2 = Bodies.rectangle(0, 0, 0, screenHeight * 2, {
    isStatic: true,
    render: {
      fillStyle: "rgba(225,225,225,0)",
    },
  });

  let ground3 = Bodies.rectangle(screenWidth * 2, 0, 0, screenHeight, {
    isStatic: true,
    render: {
      fillStyle: "rgba(225,225,225,0)",
    },
  });

  World.add(engine.world, [ground, ground2, ground3]);

  let mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
  Composite.add(engine.world, mouseConstraint);

  render.mouse = mouse;

  function createQQQ() {
    let qqq = Bodies.circle(screenWidth - 300, 300, 60, {
      render: {
        sprite: {
          texture: "./qqq.png",
        },
        fillStyle: "rgba(225,225,225,1)",
        filter: "grayscale(100%)",
      },
    });

    qqq.restitution = 0.7

    World.add(engine.world, [qqq]);
  }

  document.addEventListener("keydown", createQQQ);
  createQQQ();

  Engine.run(engine);
  Render.run(render);

  let interval;
  interval = setInterval(() => {
    let theCanvas = document.getElementsByTagName("canvas");
    if (theCanvas[0]) {
      theCanvas[0].style.backgroundColor = "transparent";
      clearInterval(interval);
    }
  }, 20);
});
