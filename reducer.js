const resources = [];
for (let id = 0; id < 100; id++) {
  resources.push({
    id,
    title: `No ${id}`
  });
}

const initialState = {
  resources
};

export default (state = initialState, action) => state;
