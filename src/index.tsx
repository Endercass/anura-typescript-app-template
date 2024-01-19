function App(props: { browser: any; url: string }) {
  this.browser ??= props.browser;
  this.url ??= props.url;
  return (
    <div>
      <h1>Anura TypeScript Example</h1>
      <button on:click={() => this.browser.openTab(props.url)}>
        Open <a href={props.url}>Google</a>
      </button>
    </div>
  );
}

window.addEventListener("load", () => {
  anura.import("anura.libbrowser").then((browser: any) => {
    document.body.appendChild(
      <App browser={browser} url="https://www.google.com/" />
    );
  });
});
