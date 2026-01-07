---
title: "Snake Game 3D"
date: 2025-09-26
lang: "en"
translationOf: "jogo-da-cobrinha-3d"
description: "An actually 3d snake game"
tags: ["game", "3d", "casual"]
---
That’s right. Over the past few weeks I had to deal with some… onerous… tasks, and to balance it out, I dove into an old idea — a simple, quick, casual project that just sounded really fun: a 3D snake game, but *actually* 3D. If you look around, you’ll find plenty of snake games that call themselves 3D, but they aren’t truly 3D; they might have some three-dimensional features like models or terrain, but the core gameplay itself isn’t.

I figured it couldn’t be that no real 3D snake game existed — and in a way, I was right. From what I found, there was basically only one, and it still wasn’t quite what I had in mind.

What I mean by a truly 3D snake game is that the “snake” can actually move through all three dimensions of a spatial world; that is, it can go left or right, up or down, but also inward and outward.

So I decided to start this project and give the game the look and feel I’d been imagining — and now it’s ready to share. If you’re still not sure what I mean, just take a look: [**3D Snake Game**](https://danielx-art.github.io/snakegame3d/)

Worth noting: as of now, the game is desktop-only, in the browser. There’s no adaptation yet for small, touch-based screens without a keyboard.

The game is surprisingly harder than I expected — and a few friends agree. Once again, I invite you to give it a try, and the Game Over screen shows your score, so here’s the tip: share it around.
Just don’t cheat, okay? XD

### Development

For the 3D, I used React-Three-Fiber (and Drei), all in Vite, and Zustand for general state management. Like I said, the idea was to keep it smooth, easy, ergonomic to develop—simple. The focus would be more on the game mechanics and visuals.

### The snake

At first I thought I’d build the “snake” as a series of cubes—this way I’d have easy, individual control of each segment for anything I needed. But that wasn’t a great option, because at some point I might be dealing with hundreds of cubes, and performance would tank (I figured). I switched to an instancedMesh, but a lot of issues started popping up, especially because I really wanted to use a shader — or rather, a shaderMaterial — for coloring. Shaders have always been something that impresses me and also feels pretty challenging, so I like to “dip my toes” every now and then. Anyway, after a day and a half trying, I couldn’t get shaderMaterial to play nicely with instances, and I thought: you know what? I’m just going to do everything in shaders… So I decided to handle all the “cells” of the cubic universe inside the shader, and paint each one according to what it represents — empty space, the snake’s body, food, etc – and that way I also didn’t have to worry as much about potential memory leaks due to entities changing position and size frame by frame (been burned by that before).
And that’s what I did — and I won’t deny it, GPT-5 helped me a lot, and I learned a bit more about shaders along the way.
I still want to improve that side of things — lighting, shadows, outlines, etc. — but for now, that’ll have to wait.

### The basics of how a snake game works

The snake has a head and a body, or tail, represented by a list of positions. On each game “tick” we move the head—i.e., the first position in the list—in the proper direction, updating its coordinates. From there, the first body cell (the position right after the head in the list) moves into the position the head used to occupy. Likewise, the second body cell moves into the prior position of the first, and so on.
When the snake “eats,” we add one more item to the list on the next tick, at the spot where the last segment used to be (since that last one will move).

### … I really hope you like it, and thats the end for today.