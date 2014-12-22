var p = <HTMLParagraphElement>document.createElement('p');
var hello: string = 'Hello';
var world: string = '2';

p.textContent = hello + ' ' + world;
document.body.appendChild(p);
