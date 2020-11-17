const dateDialogues = [
  'mars',
  'earth'
];

const randomDate = () => {
  const date = dateDialogues.splice(Math.floor(Math.random() * dateDialogues.length), 1);
  return date[0];
};

const dialogues = [
  'opening',
  'intro',
  randomDate(),
  randomDate(),
];

export default dialogues;
