// Clase Boton, para no repetir tanto codigo
class Button {
    constructor(x, y, label, scene, callback) {
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ 
                backgroundColor: '#fff', 
                fontSize: '50px', 
                stroke: '#000000',
                strokeThickness: 12,
                addStrokeColor: '#000000',
                fill: '#d9c859', 
                fontFamily: 'Impact'
            })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ fill: '#4a420e' }))
            .on('pointerout', () => button.setStyle({ fill: '#d9c859' }));
    }
}

export default Button;