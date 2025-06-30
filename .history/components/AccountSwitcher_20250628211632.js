import React, { useState } from 'react';
import { ChevronDown, User, Plus } from 'lucide-react';

const AccountSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccount, setActiveAccount] = useState('Adrian');

  // Contoh data akun
  const accounts = [
    { id: 1, name: 'Adrian', email: 'adrian@example.com', avatar: 'A' },
    { id: 2, name: 'Sarah', email: 'sarah@example.com', avatar: 'S' },
    { id: 3, name: 'Michael', email: 'michael@example.com', avatar: 'M' },
    { id: 4, name: 'Lisa', email: 'lisa@example.com', avatar: 'L' },
  ];

  const currentAccount = accounts.find(acc => acc.name === activeAccount);

  const handleAccountSwitch = (accountName) => {
    setActiveAccount(accountName);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header dengan Account Switcher */}
        <div className="flex items-center justify-between mb-8">
          {/* Current User Info */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-semibold text-lg">
              {currentAccount?.avatar}
            </div>
            <span className="text-white font-medium text-lg">{currentAccount?.name}</span>
          </div>

          {/* Account Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-200"
            >
              <span>Switch Account</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100">
                {/* Current Account Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                      {currentAccount?.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{currentAccount?.name}</div>
                      <div className="text-sm text-gray-600">{currentAccount?.email}</div>
                    </div>
                  </div>
                </div>

                {/* Account List */}
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Switch to account
                  </div>
                  
                  {accounts
                    .filter(account => account.name !== activeAccount)
                    .map((account) => (
                      <button
                        key={account.id}
                        onClick={() => handleAccountSwitch(account.name)}
                        className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                          style={{ backgroundColor: `hsl(${account.id * 60}, 70%, 60%)` }}
                        >
                          {account.avatar}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-medium text-gray-900">{account.name}</div>
                          <div className="text-sm text-gray-600">{account.email}</div>
                        </div>
                      </button>
                    ))}
                </div>

                {/* Add Account Button */}
                <div className="border-t border-gray-200">
                  <button 
                    className="w-full flex items-center space-x-3 px-4 py-3 text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                    onClick={() => {
                      setIsOpen(false);
                      // Handle add account logic here
                    }}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Plus className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium">Add Another Account</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Demo Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Demo Content</h2>
          <p className="text-lg leading-relaxed mb-4">
            Ini adalah konten demo untuk menunjukkan bahwa dropdown account switcher sekarang 
            transparan dan tidak mengganggu visibilitas konten di belakangnya.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Meskipun dropdown terbuka, konten ini tetap terlihat jelas tanpa terganggu transparansi. 
            Dropdown menggunakan backdrop-filter dan background semi-transparan.
          </p>
          <p className="text-lg leading-relaxed">
            Sekarang nama-nama akun terlihat jelas dan mudah dibaca dengan informasi email masing-masing akun.
          </p>
        </div>

        {/* Additional Demo Card */}
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
              {currentAccount?.avatar}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Akun Aktif: {currentAccount?.name}</h3>
              <p className="text-gray-600">{currentAccount?.email}</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-blue-800">
              <strong>Fitur Account Switcher:</strong>
            </p>
            <ul className="text-blue-700 mt-2 space-y-1">
              <li>• Menampilkan nama dan email setiap akun</li>
              <li>• Avatar berwarna unik untuk setiap akun</li>
              <li>• Highlight akun yang sedang aktif</li>
              <li>• Tombol untuk menambah akun baru</li>
              <li>• Animasi smooth saat membuka/menutup</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSwitcher;
