import * as dat from 'lil-gui'

export class GUI {
    static instance

    static getInstance() {
        return GUI.instance
    }

    constructor() {
        if (GUI.instance) return GUI.instance
        GUI.instance = this

        this.setInstance()
    }

    setInstance() {
        this.instance = new dat.GUI({ 
            width: 320, 
            title: 'Debug panel' 
        })
    }

    addFolder(folderName, obj) {
        const folder = this.instance.addFolder(folderName) 
        
        for (const key in obj) {
            folder.add(obj, key)
        }
        return this.instance
    }
}