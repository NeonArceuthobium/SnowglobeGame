


const scriptsInEvents = {

	async Storylayouteventsheet_Event1_Act6(runtime, localVars)
	{
		setTimeout(() => { if (window.showDialogue) { window.showDialogue(); } else { console.error('❌ showDialogue is not loaded yet.'); } }, 100);
		
		globalThis.c3Runtime = runtime;
		console.log("Runtime stored in globalThis:", globalThis.c3Runtime);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

