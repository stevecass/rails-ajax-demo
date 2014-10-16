json.array!(@cows) do |cow|
  json.extract! cow, :id, :name, :age, :breed
  json.url cow_url(cow, format: :json)
end
