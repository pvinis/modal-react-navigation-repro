# modal-react-navigation-repro

There is a problem with stacks when we involve a "switch", a stack and a stack with modal.

The typical "switch" navigator for v5 is to just have a conditional return. I used here the typical "auth" flow. Then we have the stack with a `Home` and a `Something` screen, just to test this. All good so far.

Now we add a stack with modal that goes before the `MainStack`, as the documentation suggests. Now we have a problem!

When we log in, the next screen comes as a modal! This is not what we want. The `Home` screen should appear as a normal stack screen, and only the `Modal` should appear as a modal screen. Is this a bug with the library, a restriction of the library, or just a case that is not considered?

Gif:
![Screen Recording 2020-02-10 at 18.25.29.gif](Screen Recording 2020-02-10 at 18.25.29.gif)

In general, I am finding the library to be hard to work with modals. Mostly with modals that need to have a stack inside them, and multiple modals at the same time.
