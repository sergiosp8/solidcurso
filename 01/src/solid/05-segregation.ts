/* eslint-disable no-unused-vars */
interface Bird{
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningsBird {
  run(): void;
}

interface SwimingBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird, RunningsBird {
  public fly () {}
  public eat () {}
  public run () {}
}

class Hummingbird implements Bird, FlyingBird, RunningsBird {
  public fly () {}
  public eat () {}
  public run () {}
}

class Ostrich implements Bird, RunningsBird {
  public eat () {}
  public run () {}
}

class Penguin implements Bird, RunningsBird, SwimingBird {
  public swim () {}
  public eat () {}
  public run () {}
}
