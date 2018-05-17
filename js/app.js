// Enemies our player must avoid 
class Enemy {

    constructor(x, y, speed) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        this.x = x;
        this.y = y;
        this.speed = speed;
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x += this.speed * dt;

        if (this.x > 500) {
            this.x = -100;
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
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
const enemy1 = new Enemy(0, 50, 200);
const enemy2 = new Enemy(0, 140, 350);
const enemy3 = new Enemy(0, 220, 300);

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
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

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);

// Place the player object in a variable called player
const player = new Player(200, 400);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {

    // console.log('key press');
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

