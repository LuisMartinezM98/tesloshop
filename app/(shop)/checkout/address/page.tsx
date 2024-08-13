import Link from 'next/link';
import { Title } from '@/components';


export default function AddressPage() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">



      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        
        <Title title="Dirección" subtitle="Dirección de entrega" />

        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">


          <div className="flex flex-col mb-2">
            <label htmlFor='nombres'>Nombres</label>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              id='nombres'
            />
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor='apellidos'>Apellidos</label>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              id='apellidos'
            />
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor='direccion'>Dirección</label>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              id='direccion'
            />
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor='direccion2'>Dirección 2 (opcional)</label>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              id='direccion2'
            />
          </div>


          <div className="flex flex-col mb-2">
            <label htmlFor='codigoPostal'>Código postal</label>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              id='codigoPostal'
            />
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor='Ciudad'>Ciudad</label>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              id='Ciudad'
            />
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor='pais'>País</label>
            <select 
              className="p-2 border rounded-md bg-gray-200"
              id='pais'
            >
              <option value="">[ Seleccione ]</option>
              <option value="CRI">Costa Rica</option>
            </select>
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor='telefono'>Teléfono</label>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
              id='telefono'
            />
          </div>



          <div className="flex flex-col mb-2 sm:mt-10">
            <Link 
              href='/checkout'
              className="btn-primary flex w-full sm:w-1/2 justify-center ">
              Siguiente
            </Link>
          </div>


        </div>

      </div>




    </div>
  );
}