import packageInfo from "../../package.json";

export default function PackageVersions() {
  const nextVersion = packageInfo.dependencies.next;
  const authVersion = packageInfo.dependencies["@reflowhq/auth-next"];
  return (
    <div className="float-right	p-6 text-sm	text-gray-500">
      {nextVersion ? <span>Next.js v{nextVersion}</span> : ""}
      {nextVersion && authVersion && <span className="mx-3">|</span>}
      {authVersion ? <span>Reflow Auth v{authVersion}</span> : ""}
    </div>
  );
}
