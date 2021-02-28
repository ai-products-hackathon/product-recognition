const mediaPicker = document.getElementById("mediaPicker");
// optional chaining
mediaPicker?.addEventListener("change", handleChange);

function handleChange(this: HTMLElement) {
    console.log("changed! + " + this);
    let files:FileList = (<FileList>(<HTMLInputElement>this).files);
    console.log(files.item(0));
    this.removeEventListener("click", handleChange);
}