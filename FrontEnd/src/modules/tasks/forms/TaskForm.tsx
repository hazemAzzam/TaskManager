import { useOpenModalStore } from "../stores/openModalStore";
import { usePostTask } from "../hooks/tasksHooks";
import { useForm } from "react-hook-form";
import { TaskFormSchema, type TaskData } from "../schemas/TaskFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../common/ui/Input";
import Select from "../../../common/ui/Select";
import { fetchUsersAutocompleteService } from "../../user/services/fetchUsersAutocompleteService";
import AutoComplete from "../../../common/ui/AutoComplete";

export default function TaskForm() {
  const { closeModal, mode, task } = useOpenModalStore();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<TaskData>({
    resolver: zodResolver(TaskFormSchema),
    defaultValues: task ?? {},
  });
  const { mutate: postTask, isError: isTaskError, error: taskError } = usePostTask();

  const onSubmit = (data: TaskData) => {
    postTask(data, {
      onError: (error: any) => {
        console.error(error);
        if (error.response?.data) {
          console.error(error.response?.data);
          const serverErrors = error.response.data;
          Object.entries(serverErrors).forEach(([field, messages]) => {
            setError(field as keyof TaskData, {
              type: "server",
              message: (messages as string[])[0],
            });
          });
        }
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{mode === "editMode" ? "Edit Task" : "Create New Task"}</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input label="Title" name="title" register={register} error={errors.title?.message} />

            <Input type="textarea" label="Description" name="description" register={register} error={errors.description?.message} />

            <div className="grid grid-cols-2 gap-4">
              <Select
                label="Status"
                name="status"
                register={register}
                error={errors.status?.message}
                options={[
                  { label: "Pending", value: "pending" },
                  { label: "In Progress", value: "in-progress" },
                  { label: "Completed", value: "completed" },
                ]}
              />

              <Select
                label="Priority"
                name="priority"
                register={register}
                error={errors.priority?.message}
                disabled={mode === "viewMode"}
                options={[
                  { label: "Low", value: "low" },
                  { label: "Medium", value: "medium" },
                  { label: "High", value: "high" },
                  { label: "Urgent", value: "urgent" },
                ]}
              />
            </div>

            <Input type="date" label="Due Date" name="dueDate" register={register} error={errors.dueDate?.message} />

            <AutoComplete name="assignee" label="Assignee" loadOptions={fetchUsersAutocompleteService} defaultOptions={true} control={control} error={errors.assignee?.message} />
          </div>

          <div className="flex space-x-3 mt-6">
            {mode != "viewMode" && (
              <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                {mode === "editMode" ? "Update" : "Create"}
              </button>
            )}
            <button
              onClick={() => {
                closeModal();
              }}
              className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
          {isTaskError && <p className="text-red-500 py-3">{taskError.message}</p>}
        </form>
      </div>
    </div>
  );
}
