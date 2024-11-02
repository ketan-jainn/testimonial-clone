interface CardProps {
    authorName: string;
    designation?: string;
    feedback: string;
    companyLogo?: string;
    profilePicture?: string
}

const Card: React.FC<CardProps> = ({
    authorName,
    designation,
    feedback,
    companyLogo,
    profilePicture
}) => {
    return (
        <div className=" bg-[#25282c] hover:bg-[#33363a] border-[#282955] border-[1px] rounded-lg p-6 max-h-[350px] max-w-[372px] w-max shadow-[#282955] shadow-md">
            <div className="flex flex-row mb-4">
                <img src={profilePicture} alt="pfp_here" className="rounded-full size-12" />
                <div className="flex flex-col pl-2">
                    <p className="text-bold text-base font-bold text-gray-200">{authorName}</p>
                    {designation && <p className="text-gray-300 text-sm">{designation}</p>}
                </div>
            </div>
            <p className="text-gray-200">{feedback}</p>
            {companyLogo && <img className="h-20" src={companyLogo} alt="Company logo" />}
        </div>
    );
};

export default Card;