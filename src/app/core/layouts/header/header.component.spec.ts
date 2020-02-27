import { HeaderComponent } from "./header.component";
import { createComponentFactory, Spectator } from "@ngneat/spectator";

describe("HeaderComponent", () => {
  let spectator: Spectator<HeaderComponent>;
  const createComponent = createComponentFactory(HeaderComponent);

  beforeEach(() => (spectator = createComponent()));

  const getTitleEl = () => spectator.query(".title");

  it("should have header with text Account Management", () => {
    expect(getTitleEl()).toHaveText("Account Management");
  });
});
