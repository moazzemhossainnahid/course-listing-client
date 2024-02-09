import { ReactNode } from 'react';

interface SingleInfoProps {
    icon: ReactNode;
    title: string;
    value: string;
}

const SingleInfo: React.FC<SingleInfoProps> = ({ icon, title, value }) => {
    return (
        <div className="w-full flex items-center justify-between border-b pb-1.5">
            <div className="flex items-center gap-2">
                {icon}
                <p className="text-sm font-medium text-gray-700">{title} :</p>
            </div>
            <p className="text-sm text-gray-500">{value}</p>
        </div>
    );
};

export default SingleInfo;