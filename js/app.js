// Enemies our player must avoid 
class Enemy {

    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        // The image/sprite for our enemies
        this.sprite = 'images/enemy-bug.png';
    }
    // Update the enemy's position
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // multiply any movement by the dt parameter
        this.x += this.speed * dt;

        if (this.x > 500) {
            this.x = -100;
            this.speed = (Math.random() * (500 - 200) + 200);
        }
        // Check for collision between player and enemies
        if (player.x < this.x + 55
            && player.x + 40 > this.x
            && player.y < this.y + 29
            && 29 + player.y > this.y) {
            //  resets the player to beginning
            player.x = 200;
            player.y = 400;
        }
    }
    // Draw the enemy on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
// Create enemy objects
const enemy1 = new Enemy(0, 50, (Math.random() * (500 - 200) + 200));
const enemy2 = new Enemy(0, 140, (Math.random() * (500 - 200) + 200));
const enemy3 = new Enemy(0, 220, (Math.random() * (500 - 200) + 200));

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        // The image/sprite for our player
        this.sprite = 'images/char-boy.png';
    }

    update() {
        // update method
        if (this.x > 400) {
            this.x = 400;
        } else if (this.x < 0) {
            this.x = 0;
        } else if (this.y < 0) {
            this.y = 400;
            this.x = 200;
        } else if (this.y > 400) {
            this.y = 400;
        }
    }
    // Draw the player on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // When arrows are pressed, it moves player position
    handleInput(e) {

        if (e === 'up') {
            this.y -= 90;
        } else if (e === 'down') {
            this.y += 90;
        } else if (e === 'left') {
            this.x -= 100;
        } else if (e === 'right') {
            this.x += 100;
        }
    }
}

// instantiate objects.
// all enemy objects placed in an array
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);

// the player object placed in a variable
const player = new Player(200, 400);

// This listens for key presses and sends the keys to Player.handleInput() method.
document.addEventListener('keyup', function (e) {

    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

