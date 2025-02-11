const Badge = ({ children, color = "blue" }) => {
    return (
      <div
        className={`inline-block bg-${color}-500 text-white text-xs font-semibold rounded-full px-3 py-1`}
      >
        {children}
      </div>
    );
  };

export default Badge
  
//   // Usage:
//   <Badge color="blue">10</Badge>
//   <Badge color="red">New</Badge>
//   <Badge color="green">Success</Badge>
  