interface CardProps {
    authorName: string;
    designation?: string;
    feedback: string;
    companyLogo?: string;
}

const Card: React.FC<CardProps> = ({ 
    authorName, 
    designation, 
    feedback, 
    companyLogo 
}) => {
    return (
        <div className="bg-black text-white w-24 h-24 rounded-lg">
            <h3>{authorName}</h3>
            {designation && <p>{designation}</p>}
            <p>{feedback}</p>
            {companyLogo && <img src={companyLogo} alt="Company logo" />}
        </div>
    );
};

export default Card;