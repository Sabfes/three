import { State } from "@app/state"
import { View } from "@views/view"

/**
 * App class
 */
export class App {
    static instance

    constructor() {
        if (App.instance) return App.instance
        App.instance = this

        this.state = new State()
        this.view = new View()

        window.addEventListener('resize', () => {
            this.resize()
        })

        this.view.renderer.instance.setAnimationLoop(() => this.update())
    }

    resize() {
        this.view.resize()
    }
    
    update() {
        this.view.update()
    }
}