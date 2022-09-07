/** @format */

const data = [
	{
		id: 1,
		name: 'Palonchi 1',
		userName: 'Palonchiyev',
		age: 123,
		desc: 'Lorem Lorem Lorem',
	},
	{
		id: 2,
		name: 'Palonchi 2',
		userName: 'Palonchiyev',
		age: 123,
		desc: 'Lorem Lorem Lorem',
	},
	{
		id: 3,
		name: 'Palonchi 3',
		userName: 'Palonchiyev',
		age: 123,
		desc: 'Lorem Lorem Lorem',
	},
	{
		id: 4,
		name: 'Palonchi 4',
		userName: 'Palonchiyev',
		age: 123,
		desc: 'Lorem Lorem Lorem',
	},
	{
		id: 5,
		name: 'Palonchi 5',
		userName: 'Palonchiyev',
		age: 123,
		desc: 'Lorem Lorem Lorem',
	},
];

const input = document.getElementById('input');
const mapMain = document.getElementById('insetMain');
const paramBlock = document.getElementById('paramBlock');
const paramBlockInset = document.getElementById('paramBlockInset');
let inputValue = '';
let view = true;

document
	.getElementById('backButton')
	.addEventListener('click', () => renderBlocks());
input.addEventListener('input', (e) => {
	inputValue = e.target.value;
	render();
});
function render() {
	mapMain.innerHTML = data
		.map(
			(value) =>
				value.name
					.toLocaleLowerCase()
					.includes(inputValue.toLocaleLowerCase()) &&
				`
		<div class="mainSelect" onclick="renderBlocks(${value.id})">${value.name}</div>
	`,
		)
		.filter(Boolean)
		.join('');
}

function renderBlocks(id) {
	paramBlock.style.display = view ? 'none' : 'block';
	mapMain.style.display = view ? 'block' : 'none';
	view = !view;
	paramInsetFunc(id);
}

function paramInsetFunc(id) {
	paramBlockInset.innerHTML = data
		.map(
			(value) =>
				value.id == id &&
				`
			<div>
				<h1>Welcome <span style='border-bottom: 3px solid teal;'>${value.name} ${value.userName}</span></h1>
				<br><br>
				<p class='paramDesc'>${value.desc}<p>
			</div>
		`,
		)
		.filter(Boolean)
		.join('');
}

renderBlocks();
render();
