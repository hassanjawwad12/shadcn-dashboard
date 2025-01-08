'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

type Member = {
  email: string;
  full_name: string;
  backgroundColor: string;
  role: string;
};

const Members = () => {
  const [members, setMembers] = useState<Member[]>([
    {
      email: 'john.doe@example.com',
      full_name: 'John Doe',
      role: 'Software Engineer',
      backgroundColor: 'rgba(135, 206, 235, 0.5)',
    },
    {
      email: 'jane.smith@example.com',
      full_name: 'Jane Smith',
      role: 'Data Scientist',
      backgroundColor: 'rgba(255, 182, 193, 0.5)',
    },
    {
      email: 'alice.johnson@example.com',
      full_name: 'Alice Johnson',
      role: 'UX/UI Designer',
      backgroundColor: 'rgba(144, 238, 144, 0.5)',
    },
    {
      email: 'bob.brown@example.com',
      full_name: 'Bob Brown',
      role: 'Product Manager',
      backgroundColor: 'rgba(255, 99, 71, 0.5)', // Light red
    },
  ]);

  const getShortForm = (fullname: string) => {
    if (!fullname) return '';
    return fullname
      .split(' ')
      .map(word => word[0]?.toUpperCase())
      .join('');
  };

  const handleRemove = (email: string) => {
    setMembers(prevMembers => prevMembers.filter(member => member.email !== email));
  };

  return (
    <div className="grid gap-4">
      <header>
        <p className="text-[36px] font-[700]">Team Settings</p>
      </header>
      <div className="border rounded">
        {members.map((member: Member, index: number) => (
          <div
            key={index}
            className="gap-2 border-b last:border-b-0 flex items-center justify-between pr-2"
          >
            <div className="flex relative flex-row gap-2 px-4 py-2">
              <div
                className="flex items-center justify-center h-10 min-h-10 w-10 rounded-full avatar text-white font-700"
                style={{ backgroundColor: member.backgroundColor }}
              >
                {getShortForm(member.full_name)}
              </div>
              <div className="grow">
                <p className="text-[16px] font-bold">{member.full_name}</p>
                <p className="text-[12px] text-neutral-500">{member.email}</p>
              </div>
            </div>
            <p className="absolute ml-[15rem]">{member.role}</p>
            <Button
              variant={'destructive'}
              onClick={() => handleRemove(member.email)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
