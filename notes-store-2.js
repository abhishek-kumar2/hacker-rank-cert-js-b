class NotesStore{

    constructor(){
        this.completedNotes = [];
        this.activeNotes = [];
        this.othersNotes = [];
    }

    addNote = (state, name) => {
        if (!name) {
            throw new Error('Name cannot be empty')
        }
        if(!this.isValidState(state)){
            throw new Error(`Invalid state ${state}`);
        }
        this.getNotesList(state).push(name);
    }

    getNotes = (state) => {
        if (!this.isValidState(state)) {
            throw new Error(`Invalid state ${state}`)
        }
        return this.getNotesList(state);
    }

    getNotesList(state){
        if(!this.isValidState(state)){
            throw new Error(`Invalid state ${state}`);
        }
        if(state === 'completed'){
            return this.completedNotes;
        } else if(state === 'active'){
            return this.activeNotes;
        }
        return this.othersNotes;
    }

    isValidState = (state) => {
        return state === 'completed' || state === 'active' || state === 'others';
    }

}

const notesStore = new NotesStore();
notesStore.addNote('completed', 'Note 1');
notesStore.addNote('active', 'Note 2');
notesStore.addNote('others', 'Note 3');
notesStore.addNote('completed', 'Note 4');
notesStore.addNote('active', 'Note 5');
notesStore.addNote('others', 'Note 6');
console.log(notesStore.getNotes('completed')); // [ 'Note 1', 'Note 4' ]
console.log(notesStore.getNotes('active')); // [ 'Note 2', 'Note 5' ]
console.log(notesStore.getNotes('others')); // [ 'Note 3', 'Note 6' ]
notesStore.addNote('computed', 'Note 7'); // Error: Invalid state computed