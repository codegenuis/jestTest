import { hello, add, removeSNames } from './App'

describe('hello', () => {
  it('should output hello', () => {
    expect(hello()).toBe('Hello');
  })
})

describe('add', () => {
  it('it should add two numbers', () => {
    expect(add(2,2)).toBe(4);
    expect(add(1,2)).toBe(3);
  })
  it('should not add strings'), () => {
    expect(add(2,'2')).toBe(null)
  }
})

describe('removeSNames', () => {
  it('should remove all s names', () => {
    const names = ['Scott', 'Courtney', 'Steve'];
    expect(removeSNames(names)).not.toContain('Scott');
    expect(removeSNames(names)).not.toContain('Steve');
  })
  it('should not remove other names', () => {
    const names = ['Scott', 'Courtney', 'Wes'];
    expect(removeSNames(names)).toContain('Courtney');
    expect(removeSNames(names)).not.toContain('Scott');
  })
  it('should account for case', () => {
    const names = ['Scott','Courtney','Wes','scott']
    expect(removeSNames(names)).not.toContain('Scott');
    expect(removeSNames(names)).not.toContain('scot');
  })
})