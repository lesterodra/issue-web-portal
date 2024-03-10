import CreateIssue from "./(components)/CreateIssue";
import Issues from "./(components)/Issues";

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <CreateIssue />
      <Issues />
    </div>
  );
}
