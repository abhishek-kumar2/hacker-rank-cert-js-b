/**
-- Notes Store --
In this challenge, the task is to implement a class called NotesStore. The class will manage a collection of notes, with each note having a state and a name. 
Valid states for notes are 'completed', 'active', and 'others'. All other states are invalid.

The class must have the following methods:
    1. AddNote(state, name): adds a note with the given name (string) and state (string) to the collection. 
        In addition to that:
            If the passed name is empty, then it throws an Exception with the message 'Name cannot be empty'.
            If the passed name is non-empty but the given state is not a valid state for a note, then it throws an Exception with the message 'Invalid state {state}'.

    2. GetNotes(state): returns a list of note names with the given state (string) added so far. The names are returned in the order the corresponding notes were added. 
        In addition to that:
            If the given state is not a valid note state, then it throws an Exception with the message 'Invalid state {state}'.
            If no note is found in this state, it returns an empty list.

Note: The state names are case-sensitive.
*/

class NotesStore {
  constructor() {
    this.notes = []
  }

  addNote = (state, name) => {
    if (name === '') {
      throw new Error('Name cannot be empty')
    }
    if (state !== 'completed' && state !== 'active' && state !== 'others') {
      throw new Error(`Invalid state ${state}`)
    }
    this.notes.push({ state, name })
  }

  getNotes = (state) => {
    if (state !== 'completed' && state !== 'active' && state !== 'others') {
      throw new Error(`Invalid state ${state}`)
    }
    return this.notes.filter(note => note.state === state).map(note => note.name)
  }
}