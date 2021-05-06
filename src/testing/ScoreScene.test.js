/* eslint-disable no-undef, no-unused-vars, no-irregular-whitespace */
import 'jest-canvas-mock';
import 'regenerator-runtime';
import ScoreScene from '../Scenes/ScoreScene';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({ result: { name: 'Alan', score: 500 } }),
}));

beforeEach(() => {
  fetch.mockClear();
});

describe('API proper behavior', () => {
  test('Get data from API', async () => {
    const res = await ScoreScene.getScores();
    expect(res).toEqual({ name: 'Alan', score: 500 });
    expect(typeof res).toBe('object');
  });

  test('Post data in API', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({ result: 'Leaderboard score created correctly.' }),
    }));
    const res = await ScoreScene.setScore('Hanna', 500);
    expect(res).toEqual({ result: 'Leaderboard score created correctly.' });
    expect(typeof res).toBe('object');
  });
});
/* eslint-enable no-undef, no-unused-vars, no-irregular-whitespace */