const bcrypt = require('bcryptjs')

const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    })

    it('should encrypt user password', async () => {
        const user = await User.create({ 
            name: 'Will', 
            email: 'will@will.com.br', 
            password: 'admin123'
        })

    const compareHash = await bcrypt.compare('admin123', user.password_hash)
    
    expect(compareHash).toBe(true);
  });
});
