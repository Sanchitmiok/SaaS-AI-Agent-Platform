import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useAgentsFilter } from "../../hooks/use-agents-filter";

export function AgentsSearchFilter() {
  const [filters, setFilters] = useAgentsFilter();

  return (
    <div className="relative ">
      <Input
        placeholder="Search agents"
        value={filters.search}
        onChange={(e) => setFilters({ search: e.target.value })}
        className="h-9 bg-white w-[200px] pl-7"
      />
      <SearchIcon className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}
