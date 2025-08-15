import { useUserModelStore } from "../stores/userModelStore";
import { useForm } from "react-hook-form";
import { UserSchema, type UserData } from "../schemas/UserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../common/ui/Input";
import Select from "../../../common/ui/Select";

export default function UserForm() {
  const { user, closeUserModal } = useUserModelStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(UserSchema),
    defaultValues: user ?? {},
  });

  const onSubmit = (data: UserData) => {
    console.log("Submitted data:", data);
    // TODO: call update API or store method here
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Edit Member</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 flex gap-2">
            <Input name="email" type="email" label="Email:" register={register} error={errors.email?.message} />
            <Select
              label="Role"
              name="role"
              register={register}
              error={errors.role?.message}
              options={[
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
              ]}
              className="w-fit!"
            />
          </div>

          <div className="space-y-4 flex gap-2">
            <Input name="username" label="Username:" register={register} error={errors.username?.message} />
          </div>
          <div className="space-y-4 flex gap-2">
            <Input name="full_name" label="Full Name:" register={register} error={errors.full_name?.message} />
          </div>

          <div className="flex gap-2 pt-4">
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              Update
            </button>

            <button type="button" onClick={closeUserModal} className="w-full bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
