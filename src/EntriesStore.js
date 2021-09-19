import { makeObservable, observable, computed, action, flow } from "mobx";
import { autorun } from "mobx"; // debugging

// Best MobX intro tutorial:
// https://www.youtube.com/watch?v=_q50BXqkAfI&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b&index=23
class EntriesStore {
	//entries = observable(["Istanbul", "Cairo"]);

	// https://stackoverflow.com/questions/62062216/simple-mobx-observable-not-rendering/67034318#67034318
	// https://mobx.js.org/observable-state.html#makeobservable
    constructor() {
        makeObservable(this, {
            entries: observable,
            filter: observable
        })
    }

	//@observable entries = ["Istanbul", "Cairo"];
	// https://stackoverflow.com/questions/55262053/reactjs-mobx-does-not-update-observable-array/55266004#55266004
	@observable entries = [
		{
			key:1, 
			destination:"Istanbul", 
			country:"Turkey",
			rating:"Good"
		}, 
		{
			key:2, 
			destination:"Cairo", 
			country:"Egypt",
			rating:"Good"
		}
	];
	@observable filter = "";
}

const entriesStore = new EntriesStore();
window.entriesStore = entriesStore; // debugging

export default entriesStore;

 // debugging
autorun(() => {
	console.log(entriesStore.entries[0]); // debugging - In browser > Console, try, eg: `entriesStore.entries[0]={destination:'Delhi'}`
	console.log(entriesStore.filter);
})
