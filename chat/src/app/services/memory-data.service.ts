import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Group1' },
      { id: 2, name: 'Group2' },
      { id: 3, name: 'Group3' },
      { id: 4, name: 'Group4' },
      { id: 5, name: 'Group5' }
    ];
    const channels = [
      { id: 1, name: 'Channel1' },
      { id: 2, name: 'Channel2' },
      { id: 3, name: 'Channel3' },
      { id: 4, name: 'Channel4' },
      { id: 5, name: 'Channel5' }
    ];
    
    const normalUsers = [
      { id: 1, name: 'Harry' },
      { id: 2, name: 'John' },
      { id: 3, name: 'Sid' },
      { id: 4, name: 'Josh' },
      { id: 5, name: 'Lio' }
    ];
    return { heroes,channels,normalUsers };
    

  }
}
