export class KeyControls {
    constructor() {
        this.keysState = {
            KeyW: false,
            KeyA: false,
            KeyS: false,
            KeyD: false
        }
        this.init()
    }

    init() {
        window.addEventListener('keydown', (e) => {
            this.keysState[e.code] = true
        })
        window.addEventListener('keyup', (e) => {
            this.keysState[e.code] = false
        })
    }

    get keys() {
        return this.keysState
    }
}