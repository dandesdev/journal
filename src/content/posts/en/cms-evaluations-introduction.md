---
title: "I am creating an evaluation platform"
date: 2025-09-12
lang: "en"
translationOf: "cms-avaliacoes-introducao"
description: "An introduction for a new project of builinding a cms for evaluations, and some general, basic fundamentals"
tags: ["cms", "project", "first"]
---

Not long ago, I was part of a specialized editorial team for educational evaluations at a large corporation. In that team, we used a proprietary platform that covered some stages of our production workflow, but often not in the way we would have liked. From that experience, I realized there isn’t a truly satisfactory way to create, manage, deliver, and track evaluations for a wide variety of purposes. Existing solutions—like Google Forms, Typeform, Moodle, and other proprietary platforms I’ve worked with—meet part of the need, but they don’t provide an integrated experience that covers all stages of an evaluation’s lifecycle, nor do they offer a fluid experience for independent educators and editors, for institutions, and, of course, for respondents.

That said, **hello! Welcome back**. Today I’ll start to share a bit about this project, giving a basic  panorama on how I imagine and envision it, without getting deep into the software itself yet. Chill, soon I will write in more details about the development and design process.

First, a quick clarification: “evaluation” is a very broad term and takes different forms in different contexts and cultures—there’s a lot of academic literature on this topic if you’re interested!—but here, specifically, when I say “evaluation,” I mean what you’d probably recognize as a school test: in short, *a series of questions laid out according to a pedagogical program, with answers evaluated by a well-defined scoring criterion*.

With that established, I think the best place to start is with the basics of what I expect in terms of functionality. The final objective, the problems, and the challenges should emerge naturally.

## The basics

### Users

There are three main types of users for this application, plus a bonus one:


1. **Independent educators**: a teacher or private tutor, for example, who wants to keep an item bank and assign evaluations to their students.

2. **Respondents**: those who will actually take the evaluations.

3. **Organizations and educational institutions**: a group of people with different roles who can work together to create and deliver the evaluation.

4. **(Bonus): Anyone** who wants to create a public evaluation or survey and track statistics and results.

### Tools

As mentioned earlier, in its simplest form, an evaluation here consists of a series of what we call evaluation items—multiple-choice questions are one example. However, just stitching together several items doesn’t make an evaluation, or at least it shouldn’t. An evaluation has an overarching concept that runs through all its items: what you want to evaluate and why. For example, the most common type of school in Brazil has classes of students grouped by age, and each class follows a specific curricular year—that is, they are expected to cover certain content defined broadly by the school itself and also by the State, through, for example, the [BNCC](https://basenacionalcomum.mec.gov.br/) (Brazil’s National Common Curricular Base). Regardless of that curricular content, there can also be, as in the [ENEM](https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem) (the national high school exam), a list of specific skills the evaluation can “measure”—continuing with the ENEM example, an item may align to the curricular topic Mathematics > Algebra > Quadratic Equations and at the same time fall under competency/skill C5 - H23.

Finally, the evaluation doesn’t end when a student completes it and can see their score, the overall results are still of interested to be processed, they need to be checked, compared, and analyzed by the evaluating entity, using, for example, psychometrics — if you’ve never seen the term, let’s say it’s basically a way of evaluating the evaluation itself. By analogy with DevOps, **the lifecycle of an evaluation is essentially a CI/CD loop**.

It follows that a user responsible for designing the evaluation should basically be able to:

- Create and edit evaluation items;

- Assemble an evaluation using created/reused items;

- Represent and associate the curricular topics covered by those items;

- Do the same for competencies and/or skills;

- Share and publish the evaluation to the target respondent audience;

- Analyze results statistically and track psychometric indicators in near real time.

As for the respondent, in addition to the obvious, they should also be able to check their results and, quite often, compare them with those of other respondents, for example, on a leaderboard.

With the basics layed out and well defined, let's stop right here today. I'll be back soon to talk more about the software itself, I guess, Its tech stack, and who knows even a roadmap. Thank you, and see you later!

— Daniel