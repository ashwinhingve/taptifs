interface BenefitBadgeProps {
  icon: React.ReactNode;
  title: string;
}

export function BenefitBadge({ icon, title }: BenefitBadgeProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <div className="text-blue-900">{icon}</div>
      </div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
    </div>
  );
}
