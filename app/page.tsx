import FilterDropdown from '@/components/filter-dropdown'
import OrdersTable from '@/components/orders-table'
import Pagination from '@/components/pagination'
import SearchInput from '@/components/search-input'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default async function Component() {
  return (
    <main className="container px-1 py-10 md:p-10">
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Pedidos</CardTitle>
          <CardDescription>
            Uma listagem de pedidos do seu negócio.
          </CardDescription>
          <div className="flex gap-4 pt-10">
            <SearchInput />
            <FilterDropdown />
          </div>
        </CardHeader>
        <CardContent>
          <OrdersTable />
          <div className="mt-8">
            <Pagination />
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
